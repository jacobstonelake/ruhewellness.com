import React from 'react';
import './Services.css';
import { FaUserMd, FaVenus, FaCalendarAlt, FaLaptopMedical, FaPills } from 'react-icons/fa';

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

    {/* Appointments Section */}
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

    {/* Expertise Section */}
    <section className="expertise">
      <h2>Expertise</h2>
      <p>
        Evidence-based treatment is available for a wide range of mental health conditions, including:
      </p>
      <ul className="expertise-list">
        <li>ADHD</li>
        <li>Anxiety</li>
        <li>Depression</li>
        <li>Obsessive Compulsive Disorder (OCD)</li>
        <li>Postpartum Depression/Anxiety</li>
        <li>PTSD/Trauma</li>
      </ul>
    </section>

    {/* Cash Pay Explanation */}
    <section className="services-detail cash-pay">
      <h2>The Burning Question… Why Cash Pay?</h2>
      <p>
        In today’s world, insurance companies have put <strong>“profit over patient”</strong> with high deductibles &amp; copays, frequent denials, complex terms &amp; conditions, and a lack of transparency.
      </p>
      <p>
        With insurance, a corporation dictates every aspect of the treatment course and the amount of time that can be spent with a client (usually 15–20 minutes per session).
      </p>
      <p>
        <strong>Cash pay is simple and transparent.</strong> It leads to faster care, fewer restrictions, and better control over your treatment.
      </p>
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
  </main>
);

export default Services;
