const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config({ path: __dirname + '/../.env' }); // Load .env from parent directory

// Email Transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Route
router.post('/', async (req, res) => {
  const { name, email, message, token } = req.body;

  if (!name || !email || !message || !token) {
    return res.status(400).json({ error: 'All fields and reCAPTCHA are required.' });
  }

// Secure Logging (masking env values)
console.log('🔧 GCP_PROJECT_ID loaded:', !!process.env.GCP_PROJECT_ID);
console.log('🔧 GCP_API_KEY loaded:', !!process.env.GCP_API_KEY);
console.log('🔧 ENTERPRISE_SITE_KEY loaded:', !!process.env.ENTERPRISE_SITE_KEY);


  // Verify reCAPTCHA Enterprise token
  try {
    const assessmentPayload = {
      event: {
        token,
        siteKey: process.env.ENTERPRISE_SITE_KEY,
        expectedAction: 'contact_form',
      },
    };

    const recaptchaRes = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.GCP_PROJECT_ID}/assessments?key=${process.env.GCP_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(assessmentPayload),
      }
    );

    const data = await recaptchaRes.json();
    console.log('🔐 reCAPTCHA Enterprise response:', data);

    const valid = data.tokenProperties?.valid;
    const actionMatches = data.tokenProperties?.action === 'contact_form';
    const score = data.riskAnalysis?.score ?? 0;

    if (!valid || !actionMatches || score < 0.5) {
      return res.status(403).json({ error: 'Suspicious activity detected or reCAPTCHA failed.' });
    }

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Sender's Email: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    res.status(200).json({ message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ reCAPTCHA Enterprise verification failed:', error);
    res.status(500).json({ error: 'Failed to verify reCAPTCHA or send message.' });
  }
});

module.exports = router;
