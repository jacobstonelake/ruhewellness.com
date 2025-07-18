import React from 'react';
import './Services.css';
import {
  FaUserMd,
  FaVenus,
  FaCalendarAlt,
  FaLaptopMedical,
  FaPills
} from 'react-icons/fa';

const Services = () => (
  <main className="services">

    {/* Intro */}
    <section className="services-intro">
      <p>
        At Ruhe Wellness, our goal is to provide compassionate, individualized care that empowers clients through all stages of life.
      </p>
    </section>

    {/* Overview Section */}
    <section className="services-overview">
      <h2>Provider Information</h2>
      <div className="overview-columns">
        <div className="overview-item">
          <FaUserMd size={24} color="#6A4E9A" />
          <h3>License</h3>
          <p>PMHNP</p>
        </div>
        <div className="overview-item">
          <FaVenus size={24} color="#6A4E9A" />
          <h3>Provider Gender</h3>
          <p>Female</p>
        </div>
        <div className="overview-item">
          <FaCalendarAlt size={24} color="#6A4E9A" />
          <h3>Ages Served</h3>
          <p>18–65+</p>
        </div>
      </div>
    </section>

    {/* Appointments */}
    <section className="services-detail">
      <FaLaptopMedical size={28} color="#6A4E9A" />
      <h2>Appointments</h2>
      <p>
        All sessions are conducted via secure telehealth to provide flexibility, convenience, and privacy.
        Whether you're at home, at work, or on the go, quality care is always within reach.
      </p>
    </section>

    {/* Medication Management */}
    <section className="services-detail">
      <FaPills size={28} color="#6A4E9A" />
      <h2>Medication Management</h2>
      <p>
        Chelsea provides comprehensive psychiatric medication evaluations and ongoing management tailored to your unique needs and goals. This includes reviewing current medications, past responses, and collaborating on a treatment plan that supports your well-being.
      </p>
    </section>

    {/* Expertise */}
    <section className="expertise">
      <h2>Expertise</h2>
      <p>Evidence-based treatment is available for a wide range of mental health conditions, including:</p>
      <ul className="expertise-list">
        <li>ADHD</li>
        <li>Anxiety</li>
        <li>Depression</li>
        <li>Obsessive Compulsive Disorder (OCD)</li>
        <li>Postpartum Depression/Anxiety</li>
        <li>PTSD/Trauma</li>
      </ul>
    </section>

    {/* Pricing & Packages */}
    <section className="services-detail pricing-packages">
      <h2>Pricing & Packages</h2>

      <p>Ruhe Wellness is an out-of-network provider. Cash pay is simple and transparent — it leads to faster care, fewer restrictions, and greater autonomy over your treatment.</p>
      <p>We offer a straightforward private-pay model designed to prioritize your time, privacy, and quality of care. Superbills are available for out-of-network reimbursement.</p>

      <h3>💼 Signature Sessions</h3>
      <p>Initial Psychiatric Evaluation (90 min): <strong>$400</strong><br />
         Follow-Up Session (30–45 min): <strong>$200</strong></p>

      <h3>🌱 The “Seed” Package – $720</h3>
      <p>
        1 Psychiatric Intake<br />
        2 Follow-Ups<br />
        $10 off future sessions (if booked within 30 days)
      </p>

      <h3>🌿 The “Cultivate” Package – $1,375 <em>(Most Used)</em></h3>
      <p>
        1 Intake + 5 Follow-Ups<br />
        Priority scheduling<br />
        Superbills included<br />
        $25 off future sessions (if booked within 30 days)
      </p>

      <h3>🌾 The “Harvest” Package – $2,075</h3>
      <p>
        1 Intake + 8 Follow-Ups<br />
        Secure messaging for 3 months<br />
        Monthly 15-min check-in call<br />
        Priority scheduling & reminders<br />
        $25 off future sessions (if booked within 30 days)
      </p>

      <h3>👶 “The Nest” Perinatal Support Plan – $1,320</h3>
      <p>
        1 Intake + 4 Follow-Ups<br />
        OB/GYN, midwife, doula, or therapist coordination<br />
        Priority scheduling<br />
        Personalized medication/supplement guidance
      </p>

      <h3>🌸 The Root Plan (Holistic-Only Option) – $475</h3>
      <p>
        60-min Holistic Mental Wellness Consult<br />
        2 Follow-Ups<br />
        Lifestyle/supplement guide<br />
        Optional lab review or functional medicine screening<br />
        No medications
      </p>

      <h3>📆 Monthly Memberships</h3>
      <p>
        <strong>Lavender Plan – $175/month:</strong> 1 Follow-Up, messaging, cancel anytime<br />
        <strong>Ruhe Plan – $350/month:</strong> 2 Follow-Ups, messaging, priority scheduling, and free paperwork support
      </p>

      <h3>🧾 Reimbursement</h3>
      <p>We are out-of-network, but many PPO plans offer reimbursement. Superbills are provided if eligible.</p>

      <h3>💡 Sliding Scale</h3>
      <p>A few reduced-fee spots are reserved for maternity clients, students, and others experiencing hardship — just ask during your intro call.</p>
    </section>

    {/* CTA */}
    <section className="cta-bottom">
      <h3>Ready to take the next step?</h3>
      <a
        href="https://chelsea-minix.clientsecure.me"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
      >
        Book Appointment
      </a>
    </section>

    {/*
    // Optional: Add FAQ Section here if desired
    */}

  </main>
);

export default Services;
