const User = require('../models/userModel');
const Talent = require('../models/talentModel');
const nodemailer = require('nodemailer');
const config = require('../../config/config');

exports.createTalent = async (req, res, next) => {
  try {
    const { email } = req.body;
    const password = Math.random().toString(36).slice(-8);

    // Check if user with email already exists
    let existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }

    // Create new user with talent role and generated password
    const newUser = new User({
      email: email,
      password: password,
      role: 'talent'
    });

    // Save new user to database
    await newUser.save();

    // Create new talent with account_id from new user
    const newTalent = new Talent({
      account_id: newUser._id
    });
    await newTalent.save();

    // Send email to user with generated password
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: 'Your Talent account password',
      text: `Hello! Your Talent account has been created. Your password is: ${password}`
    };
    await transporter.sendMail(mailOptions);
    return res.status(201).json({ message: 'Talent created successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};
