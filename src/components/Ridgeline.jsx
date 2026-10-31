import { buildRidges } from '../lib/terrain';

const ridges = buildRidges();

// Layered mountain silhouettes along the top of the footer; the front one glows.
const Ridgeline = () => (
  <svg className="ridgeline" viewBox="0 0 1600 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    {ridges.map((d, i) => <path key={d} d={d} className={i === ridges.length - 1 ? 'front' : undefined} />)}
  </svg>
);

export default Ridgeline;
