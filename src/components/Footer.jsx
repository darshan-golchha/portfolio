import { profile } from '../data/profile';
import LinkList from './LinkList';
import LocalTime from './LocalTime';
import Ridgeline from './Ridgeline';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Ridgeline />
      <div className="container footer-inner">
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
