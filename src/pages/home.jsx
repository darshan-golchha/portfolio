import { Link } from 'react-router-dom';
import { experience } from '../data/experience';
import Hero from '../components/Hero';
import ExperienceList from '../components/ExperienceList';
import { SectionHead } from '../components/Bits';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="container">
        <section id="experience" className="section">
          <SectionHead title="Experience" count={experience.length} />
          <ExperienceList compact />
          <div className="actions">
            <Link className="button" to="/about#experience">Full experience →</Link>
            <Link className="button button-primary" to="/projects#all-projects">See projects →</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
