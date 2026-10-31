import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';

const Navbar = () => {
  return (
    <header className="site-header">
      <NavLink to="/" className="logo">
        <span className="logo-mark" aria-hidden="true" />
        {profile.name.split(' ')[0].toLowerCase()}
      </NavLink>
      <nav className="nav-pill" aria-label="Main">
        <NavLink to="/projects">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
      </nav>
      <a className="button button-primary header-cta" href={`mailto:${profile.email}`}>
        <span aria-hidden="true">+</span> Get in touch
      </a>
    </header>
  );
};

export default Navbar;
