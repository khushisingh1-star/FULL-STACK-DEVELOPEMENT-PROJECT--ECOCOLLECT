const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with Atlas
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecocollect');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB Atlas');
});

// MongoDB Schemas
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  xp: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  badges: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const pickupSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: String,
  location: String,
  pickupType: String,
  time: String,
  phone: String,
  materials: [String],
  notes: String,
  status: { type: String, default: 'Scheduled' },
  createdAt: { type: Date, default: Date.now }
});

const pledgeSchema = new mongoose.Schema({
  user: String,
  pledge: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Pickup = mongoose.model('Pickup', pickupSchema);
const Pledge = mongoose.model('Pledge', pledgeSchema);

// Authentication Routes
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      email,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ 
      message: 'Login successful',
      user: { 
        email: user.email, 
        xp: user.xp, 
        streak: user.streak,
        badges: user.badges 
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Pickup Routes
app.post('/api/pickups', async (req, res) => {
  try {
    const pickup = new Pickup(req.body);
    await pickup.save();
    
    // Update user XP
    await User.findOneAndUpdate(
      { email: req.body.user },
      { $inc: { xp: 10 } }
    );

    res.status(201).json({ message: 'Pickup scheduled successfully', pickup });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/pickups/:userEmail', async (req, res) => {
  try {
    const pickups = await Pickup.find({ user: req.params.userEmail }).sort({ createdAt: -1 });
    res.json(pickups);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.put('/api/pickups/:id/complete', async (req, res) => {
  try {
    const pickup = await Pickup.findByIdAndUpdate(
      req.params.id,
      { status: 'Completed' },
      { new: true }
    );

    if (!pickup) {
      return res.status(404).json({ message: 'Pickup not found' });
    }

    // Add more XP for completion
    await User.findOneAndUpdate(
      { email: pickup.user },
      { 
        $inc: { xp: 20, streak: 1 }
      }
    );

    res.json({ message: 'Pickup marked as completed', pickup });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Pledge Routes
app.post('/api/pledges', async (req, res) => {
  try {
    const pledge = new Pledge(req.body);
    await pledge.save();
    
    // Add XP for making a pledge
    await User.findOneAndUpdate(
      { email: req.body.user },
      { $inc: { xp: 5 } }
    );

    res.status(201).json({ message: 'Pledge added successfully', pledge });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/pledges', async (req, res) => {
  try {
    const pledges = await Pledge.find().sort({ createdAt: -1 }).limit(20);
    res.json(pledges);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Stats Routes
app.get('/api/stats/:userEmail', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.userEmail });
    const pickups = await Pickup.find({ user: req.params.userEmail });
    
    let itemsRecycled = 0;
    pickups.forEach(p => itemsRecycled += p.materials.length);
    const totalWeight = itemsRecycled * 0.5; // 0.5kg per item average
    const carbonOffset = Math.round(totalWeight * 2.5); // 2.5kg CO2 per kg recycled

    // Determine badges based on XP
    let badges = [];
    if (user.xp >= 100) badges.push('Plastic Buster');
    if (user.xp >= 200) badges.push('Paper Saver');
    if (user.xp >= 500) badges.push('Eco Warrior');

    // Update user badges if new ones earned
    if (badges.length > user.badges.length) {
      await User.findOneAndUpdate(
        { email: req.params.userEmail },
        { badges: badges }
      );
    }

    const stats = {
      itemsRecycled: itemsRecycled,
      totalWeight: Math.round(totalWeight * 10) / 10,
      carbonOffset: carbonOffset,
      xpEarned: user.xp,
      totalPickups: pickups.length,
      streakDays: user.streak,
      badgesEarned: badges.length > 0 ? badges.join(', ') : 'None'
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Community Routes
app.get('/api/community/leaderboard', async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $project: {
          email: 1,
          xp: 1,
          badges: 1
        }
      },
      { $sort: { xp: -1 } },
      { $limit: 10 }
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.get('/api/community/goal', async (req, res) => {
  try {
    const pickups = await Pickup.find();
    let totalItems = 0;
    pickups.forEach(p => totalItems += p.materials.length);
    const totalCarbon = Math.round(totalItems * 0.5 * 2.5);
    
    res.json({ totalCarbon: totalCarbon });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    message: 'EcoCollect API is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 EcoCollect server running on port ${PORT}`);
  console.log(`📊 MongoDB Atlas: ${mongoose.connection.readyState === 1 ? 'Connected' : 'Connecting...'}`);
});