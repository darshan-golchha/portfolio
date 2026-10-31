// Small shared building blocks.

export const Bullets = ({ items }) => (
  <ul className="bullets">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

export const Chips = ({ items }) => (
  <ul className="chips">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

// Section title with a zero-padded count, e.g. "Experience (03)".
export const SectionHead = ({ title, count }) => (
  <div className="section-head">
    <h2>{title}</h2>
    {count != null && <span className="eyebrow">({String(count).padStart(2, '0')})</span>}
  </div>
);

// Big title block at the top of inner pages.
export const PageHeader = ({ eyebrow, title, children }) => (
  <header className="page-header container">
    <p className="eyebrow">{eyebrow}</p>
    <h1 className="page-title">{title}</h1>
    {children && <p className="page-intro">{children}</p>}
  </header>
);
