require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

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

// Verify SMTP
transporter.verify((error) => {
    if (error) {
        console.error('SMTP connection error:', error);
    }
});

// ✅ Declare the rate limiter BEFORE you use it
const contactLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: {
        error: 'Too many messages from this IP, please try again later.',
    },
});

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactLimiter, contactRoute);

// Routes
app.get('/', (req, res) => {
    res.send('Ruhe Wellness backend is live.');
});

app.get('/health', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
