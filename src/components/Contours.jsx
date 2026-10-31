import { buildContours } from '../lib/terrain';

const contours = buildContours();

// Topographic rings behind inner page titles; every fourth line is an accent "index contour".
const Contours = () => (
  <svg className="contours" viewBox="-460 -460 920 920" aria-hidden="true">
    {contours.map((d, i) => <path key={d} d={d} className={i % 4 === 3 ? 'accent' : undefined} />)}
  </svg>
);

export default Contours;
