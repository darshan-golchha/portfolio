import { profile } from '../data/profile';
import LinkList from './LinkList';
import LocalTime from './LocalTime';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-frame">
        <div className="glow" aria-hidden="true" />
        <p className="eyebrow">Get in touch</p>
        <p className="footer-statement">Have a project in mind? Let's build something great together!</p>
        <LinkList links={profile.links} />
        <div className="footer-bottom eyebrow">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
