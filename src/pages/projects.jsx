import { featuredProjects, archivedProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import LinkList from '../components/LinkList';
import { Bullets, Chips, PageHeader, SectionHead } from '../components/Bits';

const Projects = () => {
  return (
    <>
      <PageHeader eyebrow="01 / Work" title="Work">
        Explore some of my recent and notable projects that showcase my skills and passion for innovation.
      </PageHeader>

      <div className="container">
        <section className="section">
          <SectionHead title="Selected work" count={featuredProjects.length} />
          <div className="card-stack">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        <section id="all-projects" className="section">
          <SectionHead title="Projects" count={archivedProjects.length} />
          <table className="project-table">
            <thead>
              <tr>
                <th className="col-year">Year</th>
                <th>Project</th>
                <th className="col-tech">Built with</th>
                <th className="col-links">Links</th>
              </tr>
            </thead>
            <tbody>
              {archivedProjects.map((project) => (
                <tr key={project.slug} id={project.slug}>
                  <td className="col-year">{project.year}</td>
                  <td>
                    <details className="disclosure">
                      <summary>{project.title}</summary>
                      <p className="eyebrow">{project.context} · {project.dates}</p>
                      <Bullets items={project.bullets} />
                      <Chips items={project.tech} />
                    </details>
                  </td>
                  <td className="col-tech">{project.tech.join(', ')}</td>
                  <td className="col-links"><LinkList links={project.links} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Projects;
