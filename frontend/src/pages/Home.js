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

        </div>
      </div>
    </section>

    {/* Phone Contact */}
    <div className="phone-number">Call Us: (856) 223-7723</div>

    {/* Mission Statement */}
    <div className="intro-text">
      <h1>Welcome to Ruhe Wellness</h1>
      <h2>Women&#39;s Psychiatry That Blends Science &amp; Soul</h2>
      <h2>*Now accepting clients virtually in New Jersey</h2>
      <p>
        Led by Chelsea Minix, MSN, PMHNP-BC, CCRN, Ruhe Wellness offers grounded,
thoughtful, and personalized mental health care for women and mothers. With over a
decade of nursing experience and deep expertise in psychopharmacology and holistic
wellness, we provide thoughtful, evidence-based support — all through the convenience
of secure telehealth.
      </p>
      <p>
        The female experience is both unique and universal — often challenging, yet equally
inspiring and beautiful
      </p>
      <p>
        Click here to schedule your free 15-minute consultation to see if we are what you’re
looking for.
            <a 
                href="https://chelsea-minix.clientsecure.me" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button"
              >
                Book Appointment
            </a>
      </p>
    </div>

    {/* What to Expect Section 
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
    */}

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
