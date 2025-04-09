require('dotenv').config({ path: __dirname + '/.env' });
console.log('✅ EMAIL_USER loaded:', !!process.env.EMAIL_USER);

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

const app = express();
app.set('trust proxy', 1);

// CORS Options
const corsOptions = {
  origin: ['https://ruhewellness.com', 'https://www.ruhewellness.com'],
  methods: ['POST', 'GET'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

// Rate Limiter
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5,
  message: { error: 'Too many messages from this IP, please try again later.' },
});

// Routes
app.options('/api/contact', cors(corsOptions));
const contactRoute = require('./routes/contact');
app.use('/api/contact', contactLimiter, contactRoute);

// Health Check & Root
app.get('/', (req, res) => res.send('Ruhe Wellness backend is live.'));
app.get('/health', (req, res) => res.send('OK'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
