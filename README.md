# Ruhe Wellness – Full Stack Deployment

Ruhe Wellness is a secure, HIPAA-conscious mental health website designed for a private psychiatric practice. The project includes a React frontend integrated with a Node.js/Express backend for handling protected contact form submissions.

---

## 🔧 Backend Features

- **Node.js/Express API**
  - `POST /api/contact`: Validates inputs, verifies reCAPTCHA, sends email via Nodemailer.
  - `GET /health`: Lightweight health check endpoint for uptime monitoring.

- **Email Delivery**
  - Configured **Nodemailer** with Gmail SMTP for production email delivery.
  - Validated and tested with environment variables via `.env`.

- **Security & Protection**
  - Integrated **Google reCAPTCHA v2** for bot protection.
  - Applied **rate limiting** (5 requests per 10 minutes/IP) via `express-rate-limit`.
  - Added **Helmet** for secure HTTP headers.
  - Clean logging and error handling for deployment environments.

---

## ☁️ Backend Deployment

- **Hosting**: [Render Web Services](https://render.com)
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: Managed via Render dashboard
- **Health Endpoint**: Accessible at `/health` for uptime pings and monitoring

---

## ⚙️ Frontend Integration

- **Frontend Stack**: React, React Toastify, styled-components/CSS
- **Deployed To**: [ruhewellness.com](https://www.ruhewellness.com)
- **API Integration**:
  ```js
  fetch('https://ruhewellness-backend.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message, token }),
  });
  ```

---

## 🛡️ Anti-Spam & Security Highlights

- **Rate Limiting**
  ```js
  app.use('/api/contact', rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
  }));
  ```

- **reCAPTCHA v2 Verification** (Server-side with secret key)
- **Helmet Middleware** for secure headers
- **Environment-Based Config** with `dotenv`

---

## 🚀 Deployment Tools

| Tool        | Usage                  |
|-------------|------------------------|
| **Netlify** | Frontend deployment    |
| **Render**  | Backend deployment     |
| **GitHub**  | Version control & CI/CD|

---

## 📂 Environment Variables

Below is an example `.env` file structure (not committed to source):

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECEIVER_EMAIL=your-destination@gmail.com
RECAPTCHA_SECRET=your-recaptcha-secret
```

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

Built with ❤️ by **Jacob Stonelake**  
If you’re interested in how this was built, deployed, or scaled — feel free to reach out!

