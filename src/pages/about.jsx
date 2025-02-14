import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/cta';
import SkillTags from '../components/projectskills';

const About = () => {
  return (
    <section className="bg-white">
      <h1 className="head-text mt-16 p-8 pb-0">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Darshan</span>
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>A Computer Science and Data Science student at UW Madison</p>
      </div>
      <div className="py-10 flex flex-col p-8">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12 items-center justify-center">
          <div className="abt-box">
            <img src="/assets/icons/python.svg" alt="Python" className="w-16 h-16 btn-front rounded-xl" />
            <p className="mt-4">Python</p>
          </div>
          {/* Java */}
          <div className="abt-box">
            <img src="/assets/icons/java.svg" alt="Java" className="w-16 h-16" />
            <p className="mt-4">Java</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/javascript.svg" alt="JavaScript" className="w-16 h-16" />
            <p className="mt-4">JavaScript</p>
          </div>
          {/* C */}
          <div className="abt-box">
            <img src="/assets/icons/c.svg" alt="C" className="w-16 h-16" />
            <p className="mt-4">C</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/html.svg" alt="HTML" className="w-16 h-16" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/css.svg" alt="CSS" className="w-16 h-16" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/react.svg" alt="React" className="w-16 h-16" />
            <p className="mt-4">React</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/mysql.svg" alt="MySQL" className="w-16 h-16" />
            <p className="mt-4">MySQL</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/git.svg" alt="Git" className="w-16 h-16" />
            <p className="mt-4">Git</p>
          </div>
          {/* MongoDB */}
          <div className="abt-box">
            <img src="/assets/icons/mongo.svg" alt="MongoDB" className="w-16 h-16" />
            <p className="mt-4">MongoDB</p>
          </div>
          {/* Java Spring Boot */}
          <div className="abt-box">
            <img src="/assets/icons/spring.svg" alt="Spring Boot" className="w-16 h-16" />
            <p className="mt-4">Spring Boot</p>
          </div>
          {/* Flask, Django */}
          <div className="abt-box">
            <img src="/assets/icons/flask.png" alt="Flask" className="w-16 h-16" />
            <p className="mt-4">Flask</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/django.svg" alt="Django" className="w-16 h-16" />
            <p className="mt-4">Django</p>
          </div>
          {/* Rest API */}
          <div className="abt-box">
            <img src="/assets/icons/rest.svg" alt="Rest API" className="w-16 h-16" />
            <p className="mt-4">Rest API</p>
          </div>
          {/* WebSocket */}
          <div className="abt-box">
            <img src="/assets/icons/websocket.svg" alt="WebSocket" className="w-16 h-16" />
            <p className="mt-4">WebSocket</p>
          </div>
          {/* Tailwind CSS */}
          <div className="abt-box">
            <img src="/assets/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-16 h-16" />
            <p className="mt-4">Tailwind CSS</p>
          </div>
          {/* three js */}
          <div className="abt-box">
            <img src="/assets/icons/three.svg" alt="Three.js" className="w-16 h-16" />
            <p className="mt-4">Three.js</p>
          </div>
          {/* Docker, AWS, S3*/}
          <div className="abt-box">
            <img src="/assets/icons/docker.svg" alt="Docker" className="w-16 h-16" />
            <p className="mt-4">Docker</p>
          </div>
          <div className="abt-box">
            <img src="/assets/icons/aws.svg" alt="AWS" className="w-16 h-16" />
            <p className="mt-4">AWS</p>
          </div>
        </div>
      </div>
      <div className="py-16 bg-black p-8">
        <h3 className="text-white font-semibold sm:text-3xl text-xl relative font-poppins">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-white">
          <p>Explore my professional experiences where I've applied my skills in software development and data science to create impactful solutions.</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              date="May 2024 - August 2024"
              iconStyle={{
                background: '#3498db',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none'
              }}
              contentStyle={
                {
                  boxShadow: 'none',
                  borderBottom: '12px solid #001f6f',
                }
              }
              icon={<img src="/assets/icons/opstree.jpg" alt="O" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >

              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Software Engineering and Machine Learning Intern</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Opstree Solutions</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Pioneered a Dynamic React-Based Form</span>: Designed and implemented a sophisticated React-based form to efficiently gather detailed infrastructure requirements, enhancing user experience and project accuracy.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Integrated Advanced Backend API</span>: Developed a robust backend using Python and Django, incorporating Google Gemini LLM for precise and actionable infrastructure recommendations, significantly improving real-time updates and form submissions.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Enabled Interactive Infrastructure Adjustments</span>: Introduced a chat-based interface allowing users to modify generated infrastructure designs interactively, reducing manual input by 40% and increasing user satisfaction by 30%.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Optimized Code Quality and Review Processes</span>: Combined SonarQube and SonarCloud to create a comprehensive code quality platform, and deployed a Bug Frequency Server and LLM integration to cut critical production bugs by 40% and enhance review efficiency by 50%.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Enhanced CI/CD Pipeline and Severity Indexing</span>: Developed a multi-faceted severity calculator and streamlined SonarCloud setup, resulting in a 30% improvement in issue prioritization and a 60% reduction in manual review time.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Integrated Multi-VCS Support</span>: Built a system to fetch and analyze pull requests from GitLab, GitHub, and Bitbucket, simplifying multi-repository management and ensuring compatibility across major version control systems.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Implemented Robust Anomaly Detection</span>: Designed an anomaly detection system using sklearn Isolation Forest to monitor critical metrics, improving proactive system management and identifying unusual patterns effectively.
                </li>
              </ul>
              <SkillTags skills={['SonarQube', 'SonarCloud', 'Python', 'JavaScript', 'Docker', 'Django', 'Java', 'SpringBoot', 'RestAPI', 'LLM', 'sklearn', 'MySQL', 'HTML', 'CSS', 'BitBucket']} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="June 2023 - August 2023"
              iconStyle={{
                background: '#3498db',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={
                {
                  boxShadow: 'none',
                  borderBottom: '12px solid #3498db',
                }
              }
              icon={<img src="/assets/icons/nucleus.png" alt="O" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Software Engineering Intern</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Nucleus Software Exports Limited</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Developed <span className='reshigh'>Nucleopedia</span>, a knowledge-based management system that centralizes work-related knowledge and training, resulting in a significant 70% reduction in onboarding time for over 1500 employees.
                </li>
                <li>
                  Designed and implemented a network of interconnected <span className='reshigh'>database</span> tables utilizing <span className='reshigh'>MySQL</span> to normalize data, <span className='reshigh'>enhancing data management efficiency</span> and retrieval speed. Achieved a remarkable 75% <span className='reshigh'>reduction in latency, optimizing system performance</span> and ensuring seamless data access.
                </li>
                <li>
                  Successfully implemented <span className='reshigh'>Spring Security</span> and <span className='reshigh'>JWT</span>, showcasing <span className='reshigh'>problem-solving skills</span> by identifying and mitigating security threats, resulting in a 98% reduction in unauthorized access.
                </li>
                <li>
                  Utilized <span className='reshigh'>JPA</span> repository and Jakarta.persistence methods to build an efficient <span className='reshigh'>search engine</span>, improving <span className='reshigh'>UX</span>.
                </li>
                <li>
                  Demonstrated <span className='reshigh'>adaptability</span> by rapidly learning and implementing <span className='reshigh'>React</span> and <span className='reshigh'>REST API</span>, contributing to a 60%
                  reduction in reload time for the <span className='reshigh'>web application</span>.
                </li>
              </ul>
              <SkillTags skills={['Java', 'SpringBoot', 'RestAPI', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React', 'AWS', 'S3']} />
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
}

export default About;
