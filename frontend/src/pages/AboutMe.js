import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Intro Section */}
      <section className="intro">
        <h2>About Me</h2>
        <div className="intro-content">
          <img 
            src="/images/chelseapro.png" 
            alt="Chelsea Minix professional attire" 
            className="profile-image" 
          />
          <div className="intro-text">
            <p>
              Hi, I’m <strong>Chelsea Minix</strong>, a board-certified Psychiatric Mental Health Nurse Practitioner and founder of Ruhe Wellness.
              My journey into mental health care began over a decade ago in the fast-paced world of critical care nursing, where I worked with some of the most medically complex and critically ill patients.
            </p>
            <p>
              Those early years sharpened my clinical instincts and critical thinking skills — but more importantly, they deepened my understanding of human resilience and the healing power of compassion.
            </p>
            <p>
              Now, as a mother and psychiatric provider, I bring that same depth of experience into the world of psychiatry. I specialize in psychopharmacology with a deep respect for the science behind medications,
              while also honoring the importance of holistic wellness — recognizing that mental health is influenced by more than just biology.
            </p>
            <p>
              Whether it’s medication management, lifestyle support, or simply holding space during life’s transitions, my approach is grounded, supportive, and tailored to the individual.
            </p>
            <p>
              At Ruhe Wellness, I bring together science and soul — delivering thoughtful, integrative care that meets you where you are.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
