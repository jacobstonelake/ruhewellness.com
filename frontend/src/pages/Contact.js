import React, { useState, useEffect } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';

const SITE_KEY = process.env.REACT_APP_SITE_KEY;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    console.log('✅ SITE KEY:', SITE_KEY);
    if (!SITE_KEY) {
      toast.error('reCAPTCHA site key is missing.');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => console.log('✅ reCAPTCHA script loaded');
    script.onerror = () => console.error('❌ Failed to load reCAPTCHA script');
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    const newErrors = {
      name: !name ? 'Name is required.' : '',
      email: !email
        ? 'Email is required.'
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? ''
        : 'Invalid email format.',
      message: !message ? 'Message is required.' : '',
    };

    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    try {
      setIsLoading(true);

      const token = await window.grecaptcha.enterprise.execute(SITE_KEY, { action: 'contact_form' });

      const response = await fetch('https://ruhewellness-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || 'Message sent!');
        e.target.reset();
      } else {
        toast.error(data.error || 'Failed to send.');
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="contact">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>We’re here to support you on your wellness journey.</p>
        <ul>
          <li>Email: <a href="mailto:ruhe.wellness@gmail.com">ruhe.wellness@gmail.com</a></li>
          <li>Phone: (856) 223-7723</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" className={errors.name ? 'shake' : ''} required />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" className={errors.email ? 'shake' : ''} required />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" className={errors.message ? 'shake' : ''} required />
          {errors.message && <p className="field-error">{errors.message}</p>}

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
