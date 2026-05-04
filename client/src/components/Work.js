import React, { useState } from 'react';
import './Work.css';

const filters = ['All', 'Film', 'Sound', 'Music', 'Commercial'];

// 1. Ensure your data includes an 'image' property
const projects = [
  { id: 1, title: 'Echoes of the Ghats', category: 'Film', year: '2024', role: 'Full Production', image: '/assets/work/ghats.jpg' },
  { id: 2, title: 'Silent City', category: 'Sound', year: '2024', role: 'Sound Design', image: '/assets/work/city.jpg' },
  { id: 3, title: 'Monsoon Score', category: 'Music', year: '2023', role: 'Original Composition', image: '/assets/work/monsoon.jpg' },
  { id: 4, title: 'Rise — Nike India', category: 'Commercial', year: '2023', role: 'Direction + Post', image: '/assets/work/nike.jpg' },
  { id: 5, title: 'Kali Documentary', category: 'Film', year: '2023', role: 'Cinematography', image: '/assets/work/kali.jpg' },
  { id: 6, title: 'Frequency', category: 'Sound', year: '2022', role: 'Immersive Audio', image: '/assets/work/audio.jpg' },
];

export default function Work() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(proj => proj.category === active);

  return (
    <section className="work" id="work">
      <div className="container">
        <header className="work-header">
          <div className="header-text">
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Projects That<br /><span>Define Us</span></h2>
          </div>
          
          <div className="work-filters">
            {filters.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </header>

        <div className="work-grid">
          {filtered.map((p, i) => (
            /* 'p' is only defined INSIDE this block */
            <div 
              key={p.id} 
              className="work-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="work-card-visual">
                <img src={p.image} alt={p.title} className="work-img" />
                
                <div className="visual-overlay">
                  <div className="visual-content">
                    <p className="work-role">{p.role}</p>
                    <h3 className="work-title">{p.title}</h3>
                  </div>
                  
                  <div className="visual-lines">
                    {[...Array(6)].map((_, j) => (
                      <div key={j} className="vline" />
                    ))}
                  </div>
                  <span className="work-year">{p.year}</span>
                </div>
                <span className="work-cat-tag">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
