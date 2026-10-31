import { profile } from '../data/profile';
import Terrain from './Terrain';
import LinkList from './LinkList';
import Affiliations from './Affiliations';

const Hero = () => {
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section className="hero">
      <Terrain />
      <div className="hero-fade" aria-hidden="true" />

      <div className="hero-content">
        <h1 className="hero-name">
          {first}
          <br />
          {rest.join(' ')}
          <span className="accent">.</span>
        </h1>
        <LinkList links={profile.links} />
      </div>

      <Affiliations />
    </section>
  );
};

export default Hero;
