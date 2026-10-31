import LinkList from './LinkList';
import { Bullets, Chips } from './Bits';

// Full treatment for a selected project.
const ProjectCard = ({ project, index }) => {
  return (
    <article id={project.slug} className="project-card">
      <div className="project-card-top eyebrow">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <span>{project.dates}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-context">
        {project.context}
        {project.note && ` · ${project.note}`}
      </p>
      {project.summary && <p className="project-summary">{project.summary}</p>}
      <Bullets items={project.bullets} />
      <Chips items={project.tech} />
      <LinkList links={project.links} />
    </article>
  );
};

export default ProjectCard;
