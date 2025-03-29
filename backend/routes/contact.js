const express = require('express');
const router = express.Router();

// POST Route for Contact Form
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
    }

    try {
        // Log the incoming message
        console.log(`Message from ${name}: ${message} (${email})`);

        // Send a success response
        res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
        console.error('Error handling message:', error);
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
});

module.exports = router;
