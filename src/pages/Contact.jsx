import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contact() {
  // STATE
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState({ sending: false, ok: null, msg: '' });

  // EVENT HANDLERS
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, ok: null, msg: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to send');

      setStatus({ sending: false, ok: true, msg: 'Message sent! Check your email.' });
      setForm({
        name: '', email: '', subject: '', message: '',
      });
    } catch (err) {
      setStatus({ sending: false, ok: false, msg: err.message });
    }

    return (
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={onChange} placeholder="Name" required />
        <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" required />
        <input name="subject" value={form.subject} onChange={onChange} placeholder="Subject" />
        <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows={6} required />
        <button type="submit" disabled={status.sending}>{status.sending ? 'Sending…' : 'Send'}</button>
        {status.ok === true && <p style={{ color: 'limegreen' }}>{status.msg}</p>}
        {status.ok === false && <p style={{ color: 'tomato' }}>{status.msg}</p>}
      </form>
    );
  };

  return (
    <div id="contact-page" className="content-page">
      <div id="contact-title">
        <h1 className="page-title">Contact Me</h1>
        <p>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Fusce ac augue eu velit dictum scelerisque non vitae nisl.
          Integer molestie pulvinar varius. Quisque ac metus laoreet,
          molestie nunc non, tempor nunc. In sagittis justo a massa lacinia fermentum.`}
        </p>
      </div>
      <div id="contact-cards">
        <div className="contact-card">
          <AiOutlineMail />
          <h3>E-mail</h3>
          <p>gabeeaton@isafuckboy.com</p>
        </div>
        <div className="contact-card">
          <HiOutlineLocationMarker />
          <h3>Location</h3>
          <p>6969 Fuckboy Lane, Las Vegas</p>
        </div>
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="What’s this about?"
            value={form.subject}
            onChange={onChange}
          />
          <textarea
            name="message"
            placeholder="Write your message…"
            rows={6}
            value={form.message}
            onChange={onChange}
            required
          />
          <button type="submit" disabled={status.sending}>
            {status.sending ? 'Sending…' : 'Send Message'}
          </button>

          {status.ok === true && <p className="ok">{status.msg}</p>}
          {status.ok === false && <p className="err">{status.msg}</p>}
        </form>
      </div>
    </div>
  );
}
