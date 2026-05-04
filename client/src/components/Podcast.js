import React from 'react';
import './Podcast.css';

const Podcast = () => {
  const steps = [
    { id: '01', title: 'RECORD', desc: 'Multi-track studio sessions with broadcast-grade microphones.', icon: '🎙️' },
    { id: '02', title: 'EDIT', desc: 'Noise reduction, leveling, mastering and tight storytelling cuts.', icon: '✂️' },
    { id: '03', title: 'PUBLISH', desc: 'Distribution-ready files, show notes and promo assets.', icon: '📡' }
  ];

  return (
    <section id="podcast" className="podcast-section">
      <div className="container">
        <div className="podcast-header">
          <div className="header-left">
            <span className="section-label">Featured Service</span>
            <h2 className="podcast-main-title">
              Your Voice. <br />
              <span className="accent-text">Professionally Produced.</span>
            </h2>
          </div>
          <div className="header-right">
            <p className="podcast-description">
              Whether you’re launching your first show or scaling a syndicated series, 
              our podcast team handles the technical craft so you can stay focused 
              on the conversation. Walk in with an idea — leave with a release-ready episode.
            </p>
          </div>
        </div>

        <div className="podcast-grid">
          {steps.map((step) => (
            <div key={step.id} className="podcast-card">
              <div className="card-top">
                <span className="card-icon">{step.icon}</span>
                <span className="card-number">{step.id}</span>
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.desc}</p>
              <div className="card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcast;