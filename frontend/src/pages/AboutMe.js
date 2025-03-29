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
                        alt="Chelsea Minix smiling, wearing professional attire" 
                        className="profile-image" 
                    />
                    <div className="intro-text">
                        <p>
                            Hi, I’m <strong>Chelsea Minix</strong>, a board-certified Psychiatric Nurse Practitioner with over a decade 
                            of nursing experience, including critical care in the ICU. My approach combines compassionate care 
                            with evidence-based practices to help clients achieve emotional and mental well-being.
                        </p>
                        <p>
                            At Ruhe Wellness, I focus on tailoring individualized treatment plans that address your unique needs, 
                            whether you're managing anxiety, depression, or other mental health challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="qualifications">
                <h2>Qualifications</h2>
                <ul>
                    <li><strong>Board-Certified:</strong> Psychiatric Nurse Practitioner</li>
                    <li><strong>Education:</strong> Masters in Psychiatric-Mental Health Nursing</li>
                    <li><strong>Expertise:</strong> Psychotherapy and medication management</li>
                </ul>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <h2>My Mission</h2>
                <p>
                    At Ruhe Wellness, my mission is to provide compassionate and effective mental health care, empowering individuals 
                    to lead fulfilling lives. I prioritize creating a safe and supportive environment for all my clients.
                </p>
            </section>


            {/* Mission Section */}
            <section className="mission">
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

        </div>
    );
};

export default AboutMe;
