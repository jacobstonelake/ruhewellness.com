require('dotenv').config();


const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const rateLimit = require('express-rate-limit');
//const mongoose = require('mongoose');

const app = express();

// MongoDB Connection
//mongoose
   // .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    //.then(() => console.log('Connected to MongoDB'))
    //.catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Log requests to the console

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Google's SMTP server
    port: 587, // Use port 587 for TLS
    secure: false, // Use false for TLS (true for SSL)
    auth: {
        user: process.env.EMAIL_USER, // Email address from .env
        pass: process.env.EMAIL_PASS, // App password from .env
    },
});

// Verify SMTP Connection
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('SMTP is ready to send emails:', success);
    }
});

// API Route for Contact Form
app.post('/api/contact', async (req, res) => {
    const { name, email, message, token } = req.body; // ✅ include token here!

    if (!name || !email || !message || !token) {
        return res.status(400).json({ error: 'All fields and reCAPTCHA are required.' });
    }

    try {
        // ✅ reCAPTCHA Verification
        const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`;
        const recaptchaRes = await fetch(verifyURL, { method: 'POST' });
        const recaptchaData = await recaptchaRes.json();

        console.log('reCAPTCHA response:', recaptchaData);

        if (!recaptchaData.success) {
            console.error('reCAPTCHA failed:', recaptchaData);
            return res.status(400).json({ error: 'Failed reCAPTCHA verification.' });
        }

        // Send Email
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


// Limit each IP to 5 requests per 10 minutes
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: {
    error: 'Too many messages from this IP, please try again later.',
  },
});

// Apply rate limiter only to the contact route
app.use('/api/contact', contactLimiter);




// Define routes
app.get('/', (req, res) => {
    res.send('Ruhe Wellness backend is live.');
  });
  
  app.get('/health', (req, res) => {
    res.send('OK');
  });

// Start Server
const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });


//health endpoint 

app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });
  