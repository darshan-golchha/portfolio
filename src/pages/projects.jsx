import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/cta';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="bg-white">
      <h1 className="head-text mt-16 p-8 pb-0">
        Welcome to My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>Explore some of my recent and notable projects that showcase my skills and passion for innovation.</p>
      </div>

      <h1 className="subhead-text mt-16 mb-0 p-8 pb-0">
        <span className="bg-blend-color-burn font-semibold drop-shadow">Advanced</span> Projects
      </h1>
      <div className="flex flex-col p-8 pt-0">
        <div className='mt-0 flex'>
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              date="June 2023 - Present"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/database.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>KBase</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Personal Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  A replica of Nucleopedia I created for NSEL, this is a knowledge-based management system that centralizes work-related knowledge and training, achieving a 70% reduction in onboarding time for over 1500 employees, demonstrating innovation and attention to detail.
                </li>
                <li>
                  More Info for this can be found at the experiences page <Link to="/about" className="text-blue-500">here</Link>.
                </li>
              </ul>
              <a href="https://kbase.darshangolchha.com" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                <img src="/assets/icons/goto.png" alt="External Link" className="w-4 h-4 animate-ping" />
              </a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="December 2023 - Present"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none'
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #001f6f',
              }}
              icon={<img src="/assets/icons/chat.png" alt="Conversia" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Conversia</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Personal Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>An innovative chat platform connecting strangers across the globe based on their interests with chatroom dissolving and creation concepts based on user activity and engagement, highlighting creativity and problem-solving skills.</li>
                <li>Slashed message delivery latency by 40% with advanced web socket technology.</li>
                <li>Optimized data efficiency by 60% using MongoDB Atlas for seamless CRUD operations.</li>
                <li>Used RESTful API structure in Java Spring Framework and React to make the responsive backend and frontend.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <h1 className="subhead-text mt-16 mb-0 p-8 pb-0">
        <span className="bg-blend-color-burn font-semibold drop-shadow">Intermediate</span> Projects
      </h1>
      <div className="py-10 flex flex-col p-8">
        <div className='mt-0 flex'>
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              date="May 2024 - Present"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
              }}
              icon={<img src="/assets/icons/detect.png" alt="AI Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Anomaly Detection System</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>AI Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Developed a robust anomaly detection system to identify trends in normal data and detect anomalies in test data.
                </li>
                <li>
                  Leveraged sklearn Isolation Forest to construct decision trees that assigned anomaly scores to data points, effectively identifying unusual patterns.
                </li>
                <li>
                  Implemented the detection system to monitor and identify unusual spikes in CPU usage and other critical metrics, ensuring proactive system management.
                </li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="June 2024 - Present"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
              }}
              icon={<img src="/assets/icons/super.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>AI Severity Detector</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Developed a sophisticated system to extract JIRA issues based on project and issue type, utilizing JIRA and Bitbucket APIs to gather and analyze commit data.
                </li>
                <li>
                  Extracted file names and line changes from commit diffs, assigning priorities based on JIRA bug severity to efficiently categorize and manage issues.
                </li>
                <li>
                  Created a severity index calculator to assign weights to code lines based on their bug priority, ensuring a precise analysis of code severity.
                </li>
                <li>
                  Trained a Sequential Neural Network Model to learn patterns from tokenized lines and their severity indices, implementing a robust supervised machine learning approach.
                </li>
                <li>
                  Successfully exported the trained model to detect and evaluate the severity of lines in real-time, showcasing innovation in automated code analysis and prioritization.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <h1 className="subhead-text mt-16 mb-0 p-8 pb-0">
        <span className="bg-blend-color-burn font-semibold drop-shadow">Easy</span> Projects
      </h1>
      <div className="py-10 flex flex-col p-8">
        <div className='mt-0 flex'>
          <VerticalTimeline layout="1-column-left">
            <VerticalTimelineElement
              date="March 2023"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
              }}
              icon={<img src="/assets/icons/java.svg" alt="Changemaker" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Changemaker</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Developed an efficient recursive change-making algorithm in Java.</li>
                <li>Achieved a 20% reduction in the number of coins required for a given value, optimizing coin usage.</li>
                <li>Enhanced algorithm runtime by 15% through the implementation of BST operations.</li>
                <li>Ensured algorithm correctness through comprehensive unit testing, showcasing attention to detail and quality assurance skills with a reduction in bugs by 100%.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="April 2023"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
              }}
              icon={<img src="/assets/icons/twitter.svg" alt="Twitter Feed" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Twitter Feed</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Engineered a highly efficient Twiterator in a singly-linked list data structure in Java, reducing memory usage by 25%.</li>
                <li>Implemented user-friendly commands, enhancing user customization by 20% through effective teamwork.</li>
                <li>Introduced a "High Likes Ratio" filter, showcasing user empathy and creativity in enhancing user experience with a 30% higher ratio of likes to total interactions.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="November 2022"
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #3498db',
              }}
              icon={<img src="/assets/icons/python.svg" alt="University Rankings Analyzer" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>University Rankings Analyzer</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Executed complex MySQL queries to efficiently retrieve and analyze data, demonstrating analytical skills and attention to detail in maintaining a 95% accuracy rate in Data Extraction.</li>
                <li>Employed pandas DataFrames in Python to streamline data processing time with a 20% improvement.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section >
  );
}

export default Projects;
