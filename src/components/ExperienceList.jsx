import { experience } from '../data/experience';
import { Bullets, Chips } from './Bits';

// `compact` shows one line per role (Home); otherwise bullets sit behind a toggle (About).
const ExperienceList = ({ compact = false }) => {
  return (
    <ol className="rows">
      {experience.map((job) => (
        <li key={`${job.company}-${job.dates}`} className="row">
          <p className="row-aside eyebrow">{job.dates}</p>
          <div>
            <h3>{job.role}</h3>
            <p className="row-sub">{job.company}</p>
            {!compact && (
              <details className="disclosure">
                <summary>Details</summary>
                <Bullets items={job.bullets} />
                <Chips items={job.tech} />
              </details>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
