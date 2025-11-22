import React from 'react';
import {
  FiDatabase, FiUploadCloud, FiSettings, FiUserCheck,
} from 'react-icons/fi';
import { TbSteeringWheel, TbBallAmericanFootball } from 'react-icons/tb';
import { FaRocket, FaGuitar } from 'react-icons/fa';
import AboutPhoto from '../assets/aboutphoto.jpg';
import Car from '../assets/formula.png';

/** Data (icons as components, not JSX) */
const RESULTS = [
  { title: '6 Years', tagline: 'Job Experience', Icon: FiUserCheck },
  { title: 'ETL Throughput', tagline: '~2.5M rows/mo', Icon: FiDatabase },
  { title: 'Large Imports', tagline: '5+/mo · ~500k ea', Icon: FiUploadCloud },
  { title: 'Bulk Ops', tagline: '20–30 jobs/mo', Icon: FiSettings },
];

const INTERESTS = [
  { title: 'Formula 1', Icon: TbSteeringWheel },
  { title: 'Football', Icon: TbBallAmericanFootball },
  { title: 'Rocket League', Icon: FaRocket },
  { title: 'Heavy Music', Icon: FaGuitar },
];

/** Small presentational bits */
function StatTile({ title, tagline, Icon }) {
  return (
    <article className="tile" aria-label={title}>
      <Icon className="tile-icon" aria-hidden size={22} />
      <h4 className="tile-title">{title}</h4>
      <p className="tile-tagline">{tagline}</p>
    </article>
  );
}

function InterestChip({ title, Icon }) {
  return (
    <div className="chip" aria-label={title}>
      <Icon className="chip-icon" aria-hidden size={18} />
      <span className="chip-title">{title}</span>
    </div>
  );
}

export default function About() {
  return (
    <main id="about-page" className="content-page">
      <section className="about-card">
        <header className="about-header">
          <h1 className="page-title">About Me</h1>
        </header>

        <div className="about-hero">
          <figure className="about-photo">
            {/* <img src={AboutPhoto} alt="Gabe Eaton" loading="lazy" /> */}
          </figure>

          <div className="about-text">
            <h2 className="about-name">Gabriel Eaton</h2>
            <h3 className="about-role">Implementation &amp; Data Solutions Engineer</h3>

            <p>
              {`Hello! I’m Gabe, a customer-facing engineer who owns end-to-end data integrations and large-scale database changes.
              For the last 6 years I’ve led client onboarding, schema mapping, T-SQL/Access/VBA transforms, validation, and production cutovers—plus building PDF/Access reporting workflows and handling helpdesk/how-tos.
              I’m the sole owner of this function at my company, so I care a lot about clear communication, predictable delivery, and clean runbooks.`}
            </p>
            <p>
              {`Outside work I’m a huge sports fan (yes… long-suffering Browns 🧡🤎), an F1 addict, and I play way too much Rocket League.
              If there’s a scoreboard, I’m probably trying to optimize it.`}
            </p>
          </div>
        </div>

        <div className="about-bottom">
          <section className="about-left">
            <div className="section-heading">
              <h3 className="about-bottom-title">Track Record</h3>
              <img className="about-emblem" src={Car} alt="an f1 car icon" aria-hidden />
            </div>

            <div className="tiles">
              {RESULTS.map((r) => (
                <StatTile key={r.title} {...r} />
              ))}
            </div>
          </section>

          <section className="about-right">
            <h3 className="about-bottom-title">My Interests</h3>
            <div className="interests">
              {INTERESTS.map((i) => (
                <InterestChip key={i.title} {...i} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
