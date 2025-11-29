import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiUserStarFill } from 'react-icons/ri';
import { IoIosCloudOutline } from 'react-icons/io';
import {
  FiDatabase, FiSettings,
} from 'react-icons/fi';
import { TbSteeringWheel, TbBallAmericanFootball } from 'react-icons/tb';
import { FaRocket, FaGuitar } from 'react-icons/fa';
import Car from '../assets/formula.png';

const stats = [
  { title: '6 Years Job', tagline: 'Experience', Icon: RiUserStarFill },
  { title: 'Bulk Ops', tagline: '20–30 jobs/mo', Icon: FiSettings },
  { title: 'ETL Throughput', tagline: '~2.5M rows/mo', Icon: FiDatabase },
  { title: 'Large Imports', tagline: '5+/mo · ~500k ea', Icon: IoIosCloudOutline },
];

const interests = [
  { title: 'Formula 1', Icon: TbSteeringWheel },
  { title: 'Sports', Icon: TbBallAmericanFootball },
  { title: 'Rocket League', Icon: FaRocket },
  { title: 'Music', Icon: FaGuitar },
];

function StatTile({ title, tagline, Icon }) {
  return (
    <div className={`tile ${title === '6 Years Job' ? 'first' : ''}`} aria-label={title}>
      <div className="icon-wrapper">
        <Icon
          aria-hidden
          size="2rem"
          color={title === '6 Years Job' ? '#1e1e1e' : '#fec476'}
        />
      </div>
      <div className="tile-content">
        <h4>{title}</h4>
        <p>{tagline}</p>
      </div>
    </div>
  );
}

function InterestChip({ title, Icon }) {
  return (
    <div className="chip" aria-label={title}>
      <Icon
        aria-hidden
        size="2rem"
        color="#fec476"
      />
      <p>{title}</p>
    </div>
  );
}

export default function About() {
  const navigate = useNavigate();

  const contact = () => {
    navigate('/contact');
  };

  return (
    <motion.div
      id="about-page"
      className="content-page"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <h1 className="page-title">About Me</h1>
      <div className="about-main">
        <div className="about-photo-container">
          <div className="about-photo" alt="photo of Gabe at Valley of Fire State Park">
            <div className="angled-border-top" />
            <div className="angled-border-bottom" />
          </div>
        </div>
        <div className="about-info">
          <h2 className="bottom-margin">Gabriel Eaton</h2>
          {/* <h3>Implementation &amp; Data Solutions Engineer</h3> */}
          <h3 className="bottom-margin">Pro Data Dude</h3>
          <p className="bottom-margin">
            {`Hello! I’m Gabriel, a customer-facing engineer who owns end-to-end data integrations and large-scale database changes.
              For the last 6 years I’ve led client onboarding, schema mapping, validation, creating reporting workflows, handling helpdesk, and more.
              I care about clear communication, predictable delivery, and clean runbooks.`}
          </p>
          <p className="bottom-margin">
            {`Outside work I’m a huge sports fan (long-suffering Browns 🧡🤎), an F1 addict, and I play way too much Rocket League.
              If there’s a scoreboard, I’m probably trying to optimize it.`}
          </p>
          <button type="button" onClick={contact}>
            Get In Touch!
          </button>
        </div>
      </div>
      <div className="about-bottom">
        <div className="stats-section">
          <h3 className="stats-title">
            Track Record
            <img src={Car} alt="an f1 car icon" aria-hidden />
          </h3>
          <div className="stat-tiles">
            {stats.map((r) => (
              <StatTile key={r.title} {...r} />
            ))}
          </div>
        </div>
        <div className="interests-section">
          <h3>My Interests</h3>
          <div className="interests-chips">
            {interests.map((i) => (
              <InterestChip key={i.title} {...i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
