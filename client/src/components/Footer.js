import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = ['Services', 'Work', 'About', 'Contact'];

  const scroll = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">MW</span>
              <span className="logo-name">MediaWorks<br /><em>Studio</em></span>
            </div>
            <p>Film. Sound. Music.<br />Mumbai, India — Est. 2010</p>
          </div>

          <nav className="footer-nav">
            <p className="footer-nav-label">Navigation</p>
            <ul>
              {links.map(l => (
                <li key={l}><button onClick={() => scroll(l)}>{l}</button></li>
              ))}
            </ul>
          </nav>

          <div className="footer-social">
            <p className="footer-nav-label">Connect</p>
            <ul>
              {['Instagram', 'Vimeo', 'LinkedIn', 'YouTube'].map(s => (
                <li key={s}><a href={`https://${s.toLowerCase()}.com`} target="_blank" rel="noreferrer">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-cta">
            <p>Ready to build something extraordinary?</p>
            <button className="btn-primary" onClick={() => scroll('Contact')}>
              Book a Session
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} MediaWorks Studio. All rights reserved.</p>
          <p className="footer-credits">Built with intentional craft.</p>
        </div>
      </div>
    </footer>
  );
}
