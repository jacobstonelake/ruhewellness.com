import React, { useState, useEffect } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Load reCAPTCHA Enterprise script on mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.REACT_APP_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValue = e.target.name.value.trim();
    const emailValue = e.target.email.value.trim();
    const messageValue = e.target.message.value.trim();

    let hasError = false;
    const newErrors = { name: '', email: '', message: '' };

    if (!nameValue) {
      newErrors.name = 'Name is required.';
      hasError = true;
    }

    if (!emailValue) {
      newErrors.email = 'Email is required.';
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailValue)) {
        newErrors.email = 'Invalid email format.';
        hasError = true;
      }
    }

    if (!messageValue) {
      newErrors.message = 'Message is required.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setErrors({ name: '', email: '', message: '' });

    try {
      setIsLoading(true);

      const token = await window.grecaptcha.enterprise.execute(
        process.env.REACT_APP_SITE_KEY,
        { action: 'contact_form' }
      );
      console.log('🧪 Token generated (frontend):', token);

      const formData = {
        name: nameValue,
        email: emailValue,
        message: messageValue,
        token,
      };

      const response = await fetch('https://ruhewellness-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Message sent successfully!');
        e.target.reset();
      } else {
        toast.error(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('❌ Error in submission:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="contact">
      <section className="contact-info">
        <h1>Contact Us</h1>
        <p>
          At Ruhe Wellness, we're here to support you on your journey to wellness. If you have questions,
          need assistance with managing your medications, or would like to schedule a visit, feel free to
          reach out.
        </p>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: <a href="mailto:ruhe.wellness@gmail.com">ruhe.wellness@gmail.com</a></li>
          <li>Call Us: (856) 223-7723</li>
        </ul>
        <p>We look forward to hearing from you!</p>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className={errors.name ? 'shake' : ''}
            required
          />
          {errors.name && <p className="field-error">{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={errors.email ? 'shake' : ''}
            required
          />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={errors.message ? 'shake' : ''}
            required
          ></textarea>
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
