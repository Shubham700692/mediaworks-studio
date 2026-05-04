// import React, { useState } from 'react';
// import './Contact.css';

// const services = ['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Other'];

// const INITIAL = { name: '', email: '', service: '', message: '' };

// export default function Contact() {
//   const [form, setForm] = useState(INITIAL);
//   const [status, setStatus] = useState('idle'); // idle | loading | success | error
//   const [msg, setMsg] = useState('');

//   const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || 'Something went wrong');
//       setStatus('success');
//       setMsg(data.message);
//       setForm(INITIAL);
//     } catch (err) {
//       setStatus('error');
//       setMsg(err.message);
//     }
//   };

//   return (
//     <section className="contact" id="contact">
//       <div className="container">
//         <div className="contact-layout">
//           <div className="contact-left reveal">
//             <p className="section-label">Start a Project</p>
//             <h2 className="section-title">
//               Let's Make<br /><span>Something Real</span>
//             </h2>
//             <p className="contact-desc">
//               Tell us about your project. We'll get back within one business day 
//               with thoughts, questions, and availability.
//             </p>

//             <div className="contact-details">
//               <div className="detail">
//                 <span className="detail-label">Studio</span>
//                 <span>Lower Parel, Mumbai 400013</span>
//               </div>
//               <div className="detail">
//                 <span className="detail-label">Email</span>
//                 <a href="mailto:studio@mediaworks.com">studio@mediaworks.com</a>
//               </div>
//               <div className="detail">
//                 <span className="detail-label">Phone</span>
//                 <a href="tel:+912268001234">+91 22 6800 1234</a>
//               </div>
//               <div className="detail">
//                 <span className="detail-label">Hours</span>
//                 <span>Mon–Sat, 10am–7pm IST</span>
//               </div>
//             </div>
//           </div>

//           <div className="contact-right reveal" style={{ transitionDelay: '0.15s' }}>
//             {status === 'success' ? (
//               <div className="form-success">
//                 <span className="success-icon">✓</span>
//                 <h3>Message Received</h3>
//                 <p>{msg}</p>
//                 <button className="btn-ghost" onClick={() => setStatus('idle')}>Send Another</button>
//               </div>
//             ) : (
//               <form className="contact-form" onSubmit={handleSubmit} noValidate>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label htmlFor="name">Your Name *</label>
//                     <input
//                       id="name" name="name" type="text"
//                       value={form.name} onChange={handleChange}
//                       placeholder="Arjun Sharma"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="email">Email Address *</label>
//                     <input
//                       id="email" name="email" type="email"
//                       value={form.email} onChange={handleChange}
//                       placeholder="arjun@studio.com"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="service">Service</label>
//                   <select id="service" name="service" value={form.service} onChange={handleChange}>
//                     <option value="">Select a service…</option>
//                     {services.map(s => <option key={s} value={s}>{s}</option>)}
//                   </select>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message">Tell Us About Your Project *</label>
//                   <textarea
//                     id="message" name="message"
//                     value={form.message} onChange={handleChange}
//                     placeholder="Describe your project, timeline, and what you're hoping to achieve…"
//                     rows={5}
//                     required
//                   />
//                 </div>

//                 {status === 'error' && <p className="form-error">{msg}</p>}

//                 <button
//                   type="submit"
//                   className="btn-primary form-submit"
//                   disabled={status === 'loading'}
//                 >
//                   {status === 'loading' ? 'Sending…' : 'Send Inquiry →'}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React, { useState } from 'react';
import './Contact.css';

const services = ['Film Production', 'Sound Design', 'Music Composition', 'Post Production', 'Other'];

const INITIAL = { name: '', email: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setStatus('success');
      setMsg(data.message);
      setForm(INITIAL);
    } catch (err) {
      setStatus('error');
      setMsg(err.message);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left reveal">
            <p className="section-label">Start a Project</p>
            <h2 className="section-title">
              Let's Make<br /><span>Something Real</span>
            </h2>
            <p className="contact-desc">
              Tell us about your project. We'll get back within one business day 
              with thoughts, questions, and availability.
            </p>

            <div className="contact-details">
              <div className="detail">
                <span className="detail-label">Studio</span>
                <span>Lower Parel, Mumbai 400013</span>
              </div>
              <div className="detail">
                <span className="detail-label">Email</span>
                <a href="mailto:studio@mediaworks.com">studio@mediaworks.com</a>
              </div>
              <div className="detail">
                <span className="detail-label">Phone</span>
                <a href="tel:+912268001234">+91 22 6800 1234</a>
              </div>
              <div className="detail">
                <span className="detail-label">Hours</span>
                <span>Mon–Sat, 10am–7pm IST</span>
              </div>
            </div>
          </div>

          <div className="contact-right reveal" style={{ transitionDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <h3>Message Received</h3>
                <p>{msg}</p>
                <button className="btn-ghost" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      placeholder="Arjun Sharma"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      value={form.email} onChange={handleChange}
                      placeholder="arjun@studio.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Project *</label>
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="Describe your project, timeline, and what you're hoping to achieve…"
                    rows={5}
                    required
                  />
                </div>

                {status === 'error' && <p className="form-error">{msg}</p>}

                <button
                  type="submit"
                  className="btn-primary form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send Inquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}