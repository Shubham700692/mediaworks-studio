import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const counterRef = useRef(null);

  useEffect(() => {
    // Animated number counters
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(el => {
      const target = parseInt(el.dataset.target, 10);
      let cur = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur + (el.dataset.suffix || '');
        if (cur >= target) clearInterval(timer);
      }, 25);
    });
  }, []);

  return (
    <section className="hero" id="home">
      {/* Animated grid background */}
      <div className="hero-grid" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => <div key={i} className="grid-line" />)}
      </div>

      {/* Cinematic glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-content">
          <p className="section-label hero-label">Est. 2010 — Mumbai, India</p>

          <h1 className="hero-title">
            <span className="title-line">Where</span>
            <span className="title-line accent">Stories</span>
            <span className="title-line">Come Alive</span>
          </h1>

          <p className="hero-sub">
            Premium film production, immersive sound design, and original music composition
            for brands, directors & artists who demand the extraordinary.
          </p>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </button>
          </div>
        </div>

        <div className="hero-stats" ref={counterRef}>
          {[
            { target: 14, suffix: '+', label: 'Years of Craft' },
            { target: 320, suffix: '+', label: 'Projects Delivered' },
            { target: 48, suffix: '', label: 'Awards Won' },
            { target: 98, suffix: '%', label: 'Client Retention' },
          ].map(({ target, suffix, label }) => (
            <div className="stat" key={label}>
              <span className="stat-number" data-target={target} data-suffix={suffix}>0{suffix}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="hero-ticker" aria-hidden="true">
        <div className="ticker-track">
          {['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Color Grading', 'Foley Art', 'Score Recording', 'ADR'].map((t, i) => (
            <span key={i}>{t} <em>✦</em></span>
          ))}
          {['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Color Grading', 'Foley Art', 'Score Recording', 'ADR'].map((t, i) => (
            <span key={'b' + i}>{t} <em>✦</em></span>
          ))}
        </div>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
