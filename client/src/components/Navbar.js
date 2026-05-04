import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const links = ['Services','Podcast', 'Work', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = useCallback(() => setScrolled(window.scrollY > 60), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner container">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-mark">MW</span>
          <span className="logo-text">MediaWorks<br /><em>Studio</em></span>
        </button>

        <ul className="nav-links desktop">
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta desktop" onClick={e => { e.preventDefault(); scrollTo('Contact'); }}>
          Book a Session
        </a>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>
          {links.map(l => (
            <li key={l}><button onClick={() => scrollTo(l)}>{l}</button></li>
          ))}
          <li>
            <button className="mobile-cta" onClick={() => scrollTo('Contact')}>
              Book a Session
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
