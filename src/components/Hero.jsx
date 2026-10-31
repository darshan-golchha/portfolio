import { useLayoutEffect, useRef } from 'react';
import { profile } from '../data/profile';
import LinkList from './LinkList';
import LocalTime from './LocalTime';

// Scales the element's font size so its text spans the full width of its parent.
const useFitToWidth = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const container = el.parentElement;
    const fit = () => {
      el.style.fontSize = '100px';
      el.style.fontSize = `${(100 * container.clientWidth) / el.offsetWidth}px`;
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(container);
    document.fonts?.ready.then(fit);
    return () => observer.disconnect();
  }, []);

  return ref;
};

const Hero = () => {
  const wordmarkRef = useFitToWidth();

  return (
    <div className="hero-shell">
      <section className="hero">
        <div className="glow" aria-hidden="true" />

        <div className="hero-statement">
          <p className="eyebrow">Hi, I'm {profile.name}</p>
          <h1>{profile.tagline}</h1>
          <p>{profile.intro}</p>
          <LinkList links={profile.links} />
        </div>

        <div className="hero-bottom">
          <div className="hero-meta eyebrow">
            <span>Portfolio — {new Date().getFullYear()}</span>
            <LocalTime />
            <a className="scroll-cue" href="#experience">Scroll to explore ↓</a>
          </div>
          <span className="wordmark" ref={wordmarkRef} aria-hidden="true">
            {profile.name.split(' ')[0]}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Hero;
