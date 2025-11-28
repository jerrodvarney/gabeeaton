import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiSettings, FiMapPin } from 'react-icons/fi';

const contactCards = [
  {
    title: 'Availability',
    body: ['Remote-friendly', 'Full-time & Contract'],
    Icon: FiBriefcase,
  },
  {
    title: 'Focus areas',
    body: [
      'Data & Integration',
      'Internal Tools & Reporting',
    ],
    Icon: FiSettings,
  },
  {
    title: 'Location',
    body: ['Las Vegas, NV', 'Pacific Time (PT)'],
    Icon: FiMapPin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      id="contact-page"
      className="content-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className="contact-main">

        <div className="contact-title">
          <h1 className="page-title">Contact Me</h1>
          <p>
            {`I’m open to data, implementation, and general software engineering roles,
          along with collaboration on interesting side projects. Use the form below
          to message me!`}
          </p>
        </div>
        <div className="contact-cards">
          {contactCards.map((card) => (
            <div key={card.title} className="contact-card">
              <div className={`card-icon ${card.title === 'Availability' ? 'first' : ''}`}>
                <card.Icon
                  size="1.75rem"
                  color={card.title === 'Availability' ? '#252525' : '#c8aa8b'}
                  aria-hidden
                />
              </div>
              <div className="card-text">
                <h3>{card.title}</h3>
                <div className="card-body">
                  {card.body.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}
