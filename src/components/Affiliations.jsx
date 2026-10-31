import { profile } from '../data/profile';
import mark from '../assets/brand/relixa-mark.json';

// Relixa's own mark and wordmark, as used on relixa.ai, drawn in the current text colour.
const RelixaLogo = () => (
  <span className="relixa-logo" role="img" aria-label="Relixa">
    <svg viewBox={mark.viewBox} aria-hidden="true">
      {mark.paths.map((d) => <path key={d.slice(0, 32)} d={d} />)}
    </svg>
    <span className="relixa-wordmark" aria-hidden="true">Relixa</span>
  </span>
);

const logos = {
  relixa: () => <RelixaLogo />,
  uw: ({ logo }) => <img className="uw-logo" src={logo} alt="University of Wisconsin–Madison" />,
};

// A title over a dark plate holding the logo.
const Plate = ({ item }) => {
  const Logo = logos[item.org];
  const Tag = item.href ? 'a' : 'div';
  const link = item.href ? { href: item.href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Tag className={`plate plate-${item.org}`} {...link}>
      <span className="plate-title">{item.title}</span>
      <span className="plate-image">
        <Logo {...item} />
      </span>
    </Tag>
  );
};

const Affiliations = () => (
  <div className="affiliations">
    {profile.affiliations.map((item) => <Plate key={item.org} item={item} />)}
  </div>
);

export default Affiliations;
