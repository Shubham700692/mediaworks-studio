import React, { useState } from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    title: 'Film Production',
    icon: '🎬',
    desc: 'End-to-end cinematic production — concept development, pre-production, principal photography, and editorial. We craft visual stories that demand attention.',
    tags: ['Concept Dev', 'Cinematography', 'Directing', 'Editing', 'Color Grade'],
  },
  {
    num: '02',
    title: 'Sound Design',
    icon: '🎙',
    desc: 'Bespoke sonic environments built from scratch. From atmospheric beds to hyper-realistic SFX, our sound designers give your project an auditory signature.',
    tags: ['Foley', 'SFX', 'ADR', 'Dialogue Edit', 'Immersive Audio'],
  },
  {
    num: '03',
    title: 'Music Composition',
    icon: '🎼',
    desc: 'Original scores crafted for the emotional arc of your story. Orchestral, electronic, hybrid — we write music that moves audiences.',
    tags: ['Orchestral', 'Electronic', 'Hybrid', 'Licensing', 'Live Recording'],
  },
  {
    num: '04',
    title: 'Post Production',
    icon: '🖥',
    desc: 'Precision post work including VFX integration, final mix, mastering, and delivery in all formats — cinema, broadcast, streaming, and social.',
    tags: ['VFX', 'Final Mix', 'Mastering', 'DCP', 'Streaming Delivery'],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="services" id="services">
      <div className="container">
        <header className="section-header reveal">
          <p className="section-label">Our Disciplines</p>
          <h2 className="section-title">
            Craft at Every<br /><span>Frame & Frequency</span>
          </h2>
        </header>

        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-card reveal ${active === i ? 'active' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div className="card-top">
                <span className="card-num">{s.num}</span>
                <span className="card-icon">{s.icon}</span>
              </div>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <div className="card-tags">
                {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="card-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
