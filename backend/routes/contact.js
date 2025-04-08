const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

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

    if (!name || !email || !message || !token) {
        return res.status(400).json({ error: 'All fields and reCAPTCHA are required.' });
    }

    try {
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`;
        const recaptchaRes = await fetch(verifyURL, { method: 'POST' });
        const recaptchaData = await recaptchaRes.json();

        if (!recaptchaData.success) {
            return res.status(400).json({ error: 'Failed reCAPTCHA verification.' });
        }

        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New message from ${name}`,
            text: `Sender's Email: ${email}\n\nMessage:\n${message}`,
        });

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message.' });
    }
});

module.exports = router;
