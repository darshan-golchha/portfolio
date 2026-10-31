// Pill links, e.g. "Code ↗  Live ↗".
const LinkList = ({ links }) => {
  if (!links?.length) return null;
  return (
    <ul className="link-list">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label} <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
