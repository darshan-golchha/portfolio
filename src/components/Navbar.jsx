import { NavLink } from 'react-router-dom';
import { profile } from '../data/profile';

const initials = profile.name.split(' ').map((part) => part[0]).join('');

const Navbar = () => {
  return (
    <header className="site-header">
      <NavLink to="/" className="logo" aria-label={`${profile.name}, home`}>
        <span className="logo-mark" aria-hidden="true" />
        <span className="logo-full">{profile.name}</span>
        <span className="logo-short">{initials}</span>
      </NavLink>
      <nav className="nav" aria-label="Main">
        <NavLink to="/projects"><span className="nav-index">01</span>Work</NavLink>
        <NavLink to="/about"><span className="nav-index">02</span>About</NavLink>
        <a href={profile.resume} target="_blank" rel="noreferrer"><span className="nav-index">03</span>Résumé</a>
        <a href={`mailto:${profile.email}`} className="nav-contact"><span className="nav-index">04</span>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
