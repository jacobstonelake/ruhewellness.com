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
        <div className="intro-content" />
      </div>
    </section>

    {/* Phone Contact */}
    <div className="phone-number">Call Us: (856) 223-7723</div>

    {/* Ruhe Definition */}
    <div className="definition">
      <p><strong>Ruhe</strong> [ˈʁuːə] <em>noun</em> (German): peace, calm, tranquility</p>
    </div>

    {/* Mission Statement */}
    <section className="info-section">
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
        inspiring and beautiful.
      </p>

      <p>
        Click below to schedule your free 15-minute consultation to see if we are what you’re looking for:
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

    {/* Specialties Section */}
    <section className="info-section">
      <h2>Specializing in Women’s Mind Wellness Throughout All Phases of Life</h2>

      <h3>What we treat:</h3>
      <p>Anxiety &amp; panic</p>
      <p>Depression &amp; mood changes</p>
      <p>Overwhelm &amp; burnout</p>
      <p>Life transitions &amp; self-discovery</p>
      <p>Pregnancy, postpartum, &amp; perimenopause</p>
      <p>PMDD, hormonal changes, &amp; sleep issues</p>

      <h3>What we do:</h3>
      <p>Free 15-minute consultation to see if we’re right for you</p>
      <p>Signature comprehensive psychiatric evaluation</p>
      <p>Medication management</p>
      <p>Lab work and genetic testing</p>
      <p>Brief psychotherapy incorporated into each visit</p>
      <p>Customized treatment plans tailored uniquely to you — your care can be as traditional or holistic as you choose!</p>
    </section>

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
