import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    quote: 'MediaWorks redefined what we thought was possible for our film\'s sound. The mix is extraordinary — every single session felt like a masterclass.',
    name: 'Vikram Anand',
    role: 'Director, Phantom Films',
  },
  {
    quote: 'The score they wrote for our commercial made it go viral overnight. They understood our brand DNA better than our own marketing team.',
    name: 'Meera Joshi',
    role: 'CMO, Tata Consumer Products',
  },
  {
    quote: 'Working with MediaWorks is working with artists who care. They didn\'t just deliver a product — they delivered a piece of work we\'re genuinely proud of.',
    name: 'Rahul Khanna',
    role: 'Executive Producer, Emmay Entertainment',
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-inner reveal">
          <p className="section-label">Client Voices</p>

          <div className="quote-area" key={idx}>
            <blockquote className="quote-text">
              "{t.quote}"
            </blockquote>
            <div className="quote-author">
              <div className="author-avatar">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="author-name">{t.name}</p>
                <p className="author-role">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="quote-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === idx ? 'active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
