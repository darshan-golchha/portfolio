import { TERRAIN_SIZE, buildTerrain } from '../lib/terrain';

const { width, height } = TERRAIN_SIZE;
const { ridges, lake } = buildTerrain();

// Wireframe alpine terrain for the home hero; the valley floor glows like alpenglow.
const Terrain = () => (
  <svg
    className="terrain"
    viewBox={`0 0 ${width} ${height}`}
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
  >
    <defs>
      {/* Lake lines run from peach at the centre to red at the shore. */}
      <radialGradient id="lake-line" gradientUnits="userSpaceOnUse" cx={lake.x} cy={lake.y} r="520">
        <stop offset="0" stopColor="#ffc4a3" />
        <stop offset="0.35" stopColor="#ff6a3d" />
        <stop offset="1" stopColor="#e8261b" />
      </radialGradient>
      <radialGradient id="lake-glow">
        <stop offset="0" stopColor="#ff6a3d" stopOpacity="0.85" />
        <stop offset="0.45" stopColor="#e8261b" stopOpacity="0.36" />
        <stop offset="1" stopColor="#e8261b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {ridges.map(({ t, d, lake: segments }) => (
      <g key={t}>
        <path className="ridge" d={d} style={{ strokeOpacity: 0.08 + t * 0.26 }} />
        {segments.map((s) => <path key={s} className="lake" d={s} />)}
      </g>
    ))}

    <ellipse className="glow" cx={lake.x} cy={lake.y} rx="600" ry="210" fill="url(#lake-glow)" />
  </svg>
);

export default Terrain;
