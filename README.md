## Ruhe Wellness - Full Stack Deployment

### 🔧 Backend Setup
- Built a secure Node.js/Express backend to handle contact form submissions.
- Implemented API endpoints:
  - `POST /api/contact`: Validates input, verifies reCAPTCHA, and sends email.
  - `GET /health`: Simple health check route.
- Integrated **Nodemailer** with Gmail SMTP for real-time email delivery.
- Used **dotenv** to manage sensitive environment variables securely.
- Implemented **Google reCAPTCHA v2** server-side verification.
- Configured server to use `process.env.PORT` for deployment flexibility.

### ☁️ Backend Deployment (Render)
- Deployed backend using **Render Web Service**, targeting the `backend/` directory.
- Defined `npm install` as build command and `npm start` as start command.
- Managed environment variables securely via the Render dashboard.
- Verified functionality via `/health` endpoint and real form submissions.

### ⚙️ Frontend Integration
- React frontend connected to backend using:
  ```js
  fetch('https://ruhewellness-backend.onrender.com/api/contact', ...);
  ```
- Deployed frontend to production at:
  🔗 [https://www.ruhewellness.com](https://www.ruhewellness.com)
- Added success/error notifications using **react-toastify**.
- Designed with full responsiveness and clean UI/UX.

### 🛡️ Spam Protection
- Implemented rate-limiting with express-rate-limit:
  ```js
  app.use('/api/contact', rateLimit({ windowMs: 10 * 60 * 1000, max: 5 }));
  ```
- Limits submissions to 5 per IP every 10 minutes to mitigate spam.

### 🚀 Deployment Tools
- **Frontend**: Netlify with custom domain `ruhewellness.com`
- **Backend**: Render with secured environment settings
- **Version Control**: GitHub private repos for frontend and backend

---

Built with ❤️ by Jacob Stonelake
Feel free to reach out if you want to know more about the tech stack, deployment, or integration process!
