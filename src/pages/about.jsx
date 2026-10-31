import { profile } from '../data/profile';
import { experience } from '../data/experience';
import { aboutIntro, skills, testimonials, recognition } from '../data/about';
import ExperienceList from '../components/ExperienceList';
import LinkList from '../components/LinkList';
import { Bullets, PageHeader, SectionHead } from '../components/Bits';

const About = () => {
  return (
    <>
      <PageHeader eyebrow="02 / About" title="About">
        Hello, I'm {profile.name.split(' ')[0]}. {aboutIntro}
      </PageHeader>

      <div className="container">
        <section id="experience" className="section">
          <SectionHead title="Experience" count={experience.length} />
          <ExperienceList />
        </section>

        <section id="skills" className="section">
          <SectionHead title="Skills" count={skills.length} />
          <dl className="skills">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className="eyebrow">{group}</dt>
                <dd>{items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="testimonials" className="section">
          <SectionHead title="Testimonials" count={testimonials.length} />
          {testimonials.map((t) => (
            <figure key={t.name} className="quote">
              <blockquote>{t.quote}</blockquote>
              <figcaption className="eyebrow">
                <strong>{t.name}</strong>
                <span>{t.title}</span>
                <span>{t.date}</span>
                <a href={t.href} target="_blank" rel="noreferrer">View on LinkedIn ↗</a>
              </figcaption>
            </figure>
          ))}
        </section>

        <section id="recognition" className="section">
          <SectionHead title="Recognition & activities" />
          {recognition.map(({ group, items }) => (
            <div key={group} className="recognition-group">
              <h3 className="eyebrow">{group} ({String(items.length).padStart(2, '0')})</h3>
              <ul className="rows">
                {items.map((item) => (
                  <li key={item.title} className="row">
                    <p className="row-aside eyebrow">{item.date}</p>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="row-sub">{item.subtitle}</p>
                      <details className="disclosure">
                        <summary>Details</summary>
                        <Bullets items={item.bullets} />
                      </details>
                      <LinkList links={item.links} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default About;
