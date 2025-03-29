import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home">
    {/* Hero Section */}
    <section 
      className="hero" 
      style={{ backgroundImage: `url("/images/lavendar.jpg")` }}
    >
      <div className="overlay"></div>
      <div className="intro-section">
        <div className="intro-content">
          {/* Optional Image */}
          {/* <img 
            src="/images/chelseapro.png" 
            alt="Chelsea Minix, Psychiatric Nurse Practitioner" 
            className="intro-image" 
          /> */}
          <div className="intro-text">
            <h1>Empowering Your Mental Health Journey</h1>
            <p>
              Hi, I’m Chelsea Minix, a board-certified Psychiatric Nurse Practitioner with 
              over 10 years of nursing experience, including critical care in the ICU. My approach 
              is centered on compassionate, evidence-based care tailored to your unique needs. 
              Whether you're managing mental health conditions or navigating medication adjustments, 
              I'm here to support you.
            </p>
            <button className="cta-button">Book Appointment</button>
          </div>
        </div>
      </div>
    </section>

    {/* Phone Contact */}
    <div className="phone-number">Call Us: (856) 223-7723</div>

    {/* Mission Statement */}
    <section className="info-section">
      <h2>Specializing in Women’s Mind Wellness Throughout All Phases of Life</h2>
      <p>
        Focusing on the treatment and management of anxiety, panic, and depression through all aspects 
        of the female existence.
      </p>
      <p>
        From growing up in today’s social climate, to pregnancy & postpartum, to finding and creating 
        yourself — we’re here to help.
      </p>
      <p>
        The female experience is both universal and unique. It can be a struggle, but can also be 
        inspiring and beautiful. Ruhe Wellness focuses on integrating psychotherapy and psychiatry 
        to create the life experience you want and deserve.
      </p>
    </section>

    {/* What to Expect Section */}
    <section className="info-section">
      <h2>What to Expect</h2>
      <p>
        Your first appointment is a thoughtful and collaborative conversation — not a checklist. 
        We’ll discuss your history, current challenges, and goals for treatment in a supportive and judgment-free space.
      </p>
      <p>
        Follow-up visits provide time to review your progress, fine-tune medications if needed, and support your ongoing journey.
        You’ll never feel rushed, and you’ll always have a voice in your care.
      </p>
    </section>

    {/* Why Cash Pay Section 
    <section className="info-section">
      <h2>The Burning Question… Why Cash Pay?</h2>
      <p>
        In today’s world, insurance companies have put <strong>“profit over patient”</strong> with high deductibles & copays,
        frequent denials, complex terms & conditions, and lack of transparency.
      </p>
      <p>
        With insurance, a corporation dictates every aspect of the treatment course and the amount of time 
        that can be spent with a client (usually 15–20 minutes per session).
      </p>
      <p>
        <strong>Cash pay is simple and transparent.</strong> It leads to faster care, fewer restrictions, and better control 
        over your treatment.
      </p>
    </section>
    */}

    {/* Testimonials Section */}
    <section className="info-section">
      <h2>What Clients Say</h2>
      <p>
        “Chelsea listens without judgment, and I always leave our sessions feeling heard and understood.”
      </p>
      <p>
        “I was nervous about starting psychiatric care, but Ruhe Wellness made me feel safe and supported from day one.”
      </p>
      <p style={{ fontStyle: 'italic', fontSize: '0.95rem' }}>
        *Testimonials are anonymized to protect privacy.
      </p>
    </section>

    {/* Final Call to Action */}
    <section className="info-section">
      <h2>Let’s Begin</h2>
      <p>
        Mental health is health — and it deserves your time, your care, and the right provider. 
        If you’re ready to take the next step, Chelsea is here to walk with you.
      </p>
      <a 
        href="https://chelsea-minix.clientsecure.me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="cta-button"
      >
        Book Appointment
      </a>
    </section>
  </div>
);

export default Home;
