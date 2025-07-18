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


    <section className="services-detail pricing-packages">
  <h2>Pricing & Packages</h2>

  <p>Ruhe Wellness is an out-of-network provider. Cash pay is simple and transparent — it leads to faster care, fewer restrictions, and greater autonomy over your treatment.</p>
  <p>We offer a straightforward private-pay model designed to prioritize your time, privacy, and quality of care. Superbills are available for out-of-network reimbursement.</p>

  {/* Signature Sessions */}
  <div className="package-card">
    <h3>💼 Signature Sessions</h3>
    <p>Initial Psychiatric Evaluation (90 min): <strong>$400</strong><br />
       Follow-Up Session (30–45 min): <strong>$200</strong></p>
  </div>

  {/* Packages */}
  {[
    {
      title: '🌱 The “Seed” Package – $720',
      content: [
        '1 Psychiatric Intake',
        '2 Follow-Ups',
        '$10 off future sessions (if booked within 30 days)'
      ]
    },
    {
      title: '🌿 The “Cultivate” Package – $1,375 (Most Used)',
      content: [
        '1 Intake + 5 Follow-Ups',
        'Priority scheduling',
        'Superbills included',
        '$25 off future sessions (if booked within 30 days)'
      ]
    },
    {
      title: '🌾 The “Harvest” Package – $2,075',
      content: [
        '1 Intake + 8 Follow-Ups',
        'Secure messaging for 3 months',
        'Monthly 15-min check-in call',
        'Priority scheduling & reminders',
        '$25 off future sessions (if booked within 30 days)'
      ]
    },
    {
      title: '👶 “The Nest” Perinatal Support Plan – $1,320',
      content: [
        '1 Intake + 4 Follow-Ups',
        'OB/GYN, midwife, doula, or therapist coordination',
        'Priority scheduling',
        'Personalized medication/supplement guidance'
      ]
    },
    {
      title: '🌸 The Root Plan (Holistic-Only) – $475',
      content: [
        '60-min Holistic Mental Wellness Consult',
        '2 Follow-Ups',
        'Lifestyle/supplement guide',
        'Optional lab review or functional screening',
        'No medications'
      ]
    }
  ].map((pkg, i) => (
    <details key={i} className="package-card collapsible">
      <summary>{pkg.title}</summary>
      <ul>
        {pkg.content.map((line, j) => (
          <li key={j}>{line}</li>
        ))}
      </ul>
    </details>
  ))}

  {/* Memberships */}
  <div className="package-card">
    <h3>📆 Monthly Memberships</h3>
    <p><strong>Lavender Plan – $175/month:</strong> 1 Follow-Up, messaging, cancel anytime</p>
    <p><strong>Ruhe Plan – $350/month:</strong> 2 Follow-Ups, messaging, priority scheduling, and free paperwork support</p>
  </div>

  {/* Reimbursement & Sliding Scale */}
  <div className="package-card">
    <h3>🧾 Reimbursement</h3>
    <p>We are out-of-network, but many PPO plans offer reimbursement. Superbills are provided if eligible.</p>
  </div>

  <div className="package-card">
    <h3>💡 Sliding Scale</h3>
    <p>A few reduced-fee spots are reserved for maternity clients, students, and others experiencing hardship — just ask during your intro call.</p>
  </div>
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
