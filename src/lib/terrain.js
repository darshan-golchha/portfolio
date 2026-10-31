// Generative alpine line art: hero terrain, footer ridges and topographic contours.
// Everything is seeded, so the drawings are identical on every load.

const lerp = (a, b, t) => a + (b - a) * t;
const bump = (x, center, width) => Math.exp(-(((x - center) / width) ** 2));
const fixed = (n) => Math.round(n * 10) / 10;

// Seeded pseudo-random numbers (mulberry32).
const random = (seed) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Smooth 2D value noise in [0, 1].
const makeNoise = (seed) => {
  const size = 256;
  const rand = random(seed);
  const table = Float32Array.from({ length: size * size }, rand);
  const at = (x, y) => table[(((y % size) + size) % size) * size + (((x % size) + size) % size)];
  const smooth = (t) => t * t * (3 - 2 * t);

  return (x, y) => {
    const ix = Math.floor(x);
    const iy = Math.floor(y);
    const fx = smooth(x - ix);
    const fy = smooth(y - iy);
    const a = at(ix, iy);
    const b = at(ix + 1, iy);
    const c = at(ix, iy + 1);
    const d = at(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  };
};

// Layered noise for rocky detail, roughly in [0, 1].
const fbm = (noise, x, y, octaves = 4) => {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise(x * freq, y * freq);
    amp *= 0.5;
    freq *= 2.1;
  }
  return sum;
};

const toPath = (points) => `M${points.map(([x, y]) => `${fixed(x)},${fixed(y)}`).join('L')}`;

export const TERRAIN_SIZE = { width: 1600, height: 900 };

// Ridge lines from far (top) to near (bottom): a massif on the right and a valley that
// widens towards the viewer. Where a line dips into the valley floor, that stretch is
// returned separately as a "lake" segment so it can glow while keeping its curve.
export const buildTerrain = ({ rows = 40, step = 10, seed = 1578 } = {}) => {
  const { width, height } = TERRAIN_SIZE;
  const noise = makeNoise(seed);
  const lakeLevel = 0.3;

  const ridges = [];
  let lake = null;

  for (let i = 0; i < rows; i++) {
    const t = i / (rows - 1);
    const baseline = lerp(540, 980, t);
    const amp = lerp(215, 150, t);
    const valleyX = lerp(780, 620, t);
    const valleyWidth = lerp(120, 480, t);
    const hasLake = t > 0.3 && t < 0.88;

    const points = [];
    const segments = [];
    let run = null;

    for (let x = -20; x <= width + 20; x += step) {
      const massif = 0.28 + bump(x, 1260, 420) + 0.3 * bump(x, 120, 260);
      const rock = fbm(noise, x * 0.004, i * 0.16) * 0.75;
      const h = (massif + rock) * (1 - 0.94 * bump(x, valleyX, valleyWidth));
      const point = [x, baseline - h * amp];
      points.push(point);

      if (hasLake && h < lakeLevel) (run ??= []).push(point);
      else if (run) { segments.push(run); run = null; }
    }
    if (run) segments.push(run);

    if (!lake && t > 0.55 && segments.length) {
      const widest = segments.reduce((a, b) => (b.length > a.length ? b : a));
      const [x, y] = widest[Math.floor(widest.length / 2)];
      lake = { x, y };
    }

    ridges.push({
      t,
      d: `${toPath(points)}L${width + 20},${height + 20}L-20,${height + 20}Z`,
      lake: segments.filter((r) => r.length > 1).map(toPath),
    });
  }

  return { ridges, lake };
};

// A few filled ridge silhouettes for the top edge of the footer, back to front.
export const buildRidges = ({ count = 5, width = 1600, height = 200, step = 12, seed = 2026 } = {}) => {
  const noise = makeNoise(seed);
  const topMargin = 6;

  const ridges = Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const baseline = lerp(110, height - 10, t);
    const amp = lerp(150, 90, t);
    const rises = [];
    for (let x = -20; x <= width + 20; x += step) {
      // Stretch the noise range so the silhouettes read as peaks rather than hills.
      const n = Math.max(0, (fbm(noise, x * 0.0035 + i * 7.3, i * 0.9) - 0.22) * 2.4);
      rises.push([x, n * (0.6 + 0.6 * bump(x, lerp(400, 1200, t), 500)) * amp]);
    }
    return { baseline, rises };
  });

  // Scale every ridge by the same factor so the tallest peak stays inside the
  // drawing instead of being clipped flat at the top edge.
  const fit = Math.min(1, ...ridges.flatMap(({ baseline, rises }) =>
    rises.filter(([, r]) => r > 0).map(([, r]) => (baseline - topMargin) / r)));

  return ridges.map(({ baseline, rises }) => {
    const points = rises.map(([x, r]) => [x, baseline - r * fit]);
    return `${toPath(points)}L${width + 20},${height + 20}L-20,${height + 20}Z`;
  });
};

// Nested, slightly irregular rings like the contour lines around a peak.
// Sampling the noise around a circle keeps every ring closed and seamless.
export const buildContours = ({ rings = 16, spacing = 24, seed = 7 } = {}) => {
  const noise = makeNoise(seed);
  return Array.from({ length: rings }, (_, k) => {
    const points = [];
    for (let deg = 0; deg < 360; deg += 4) {
      const a = (deg * Math.PI) / 180;
      const n = fbm(noise, Math.cos(a) * 1.4 + 20, Math.sin(a) * 1.4 + 20 + k * 0.03);
      const r = 26 + k * spacing + (n - 0.45) * (60 + k * 6);
      points.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    return `${toPath(points)}Z`;
  });
};
