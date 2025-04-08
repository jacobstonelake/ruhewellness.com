const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config({ path: __dirname + '/../.env' }); // Ensure correct env in this subfolder

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message, token } = req.body;

  console.log('📥 Token received (backend):', token);

  if (!name || !email || !message || !token) {
    return res.status(400).json({ error: 'All fields and reCAPTCHA are required.' });
  }

  try {
    // Use correct POST body format
    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET);
    params.append('response', token);

    const recaptchaRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const recaptchaData = await recaptchaRes.json();
    console.log('🔍 Google reCAPTCHA verify result:', recaptchaData);

    const expectedHostnames = ['ruhewellness.com'];
    if (process.env.NODE_ENV === 'development') {
      expectedHostnames.push('localhost');
    }

    if (!recaptchaData.success || !expectedHostnames.includes(recaptchaData.hostname)) {
      return res.status(400).json({ error: 'Failed reCAPTCHA verification or invalid hostname.' });
    }

    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Sender's Email: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (
