import React from 'react';
import './About.css';

const team = [
  { name: 'Arjun Mehta', role: 'Creative Director', exp: '14 yrs' },
  { name: 'Priya Nair', role: 'Lead Sound Designer', exp: '11 yrs' },
  { name: 'Rohan Das', role: 'Music Composer', exp: '9 yrs' },
  { name: 'Sneha Kapoor', role: 'Post Production Head', exp: '12 yrs' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left reveal">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">
              Fourteen Years of<br /><span>Intentional Art</span>
            </h2>
            <p className="about-body">
              MediaWorks Studio was founded in 2010 in Mumbai with a single conviction: 
              that great storytelling deserves great craft. We are a multidisciplinary 
              production house where film, sound, and music converge.
            </p>
            <p className="about-body">
              Every project that leaves our studio bears the mark of obsessive attention 
              to detail — from the first frame to the final mix. We don't just produce 
              content; we architect experiences.
            </p>

            <div className="about-values">
              {['Craft over speed', 'Story over spectacle', 'Collaboration over hierarchy'].map(v => (
                <div key={v} className="value-item">
                  <span className="value-dot" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="team-grid">
              {team.map((m, i) => (
                <div key={m.name} className={`team-card reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="team-avatar">
                    <span>{m.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="team-info">
                    <h4>{m.name}</h4>
                    <p>{m.role}</p>
                  </div>
                  <span className="team-exp">{m.exp}</span>
                </div>
              ))}
            </div>

            <div className="studio-note reveal">
              <p className="section-label">Our Studio</p>
              <p>
                2,400 sq ft. of purpose-built production space in Lower Parel, Mumbai — 
                housing two mixing suites, a live recording room with 7.1 monitoring, 
                and an editing bay with DCI-compliant screening.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
