import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/cta';
import { Link } from 'react-router-dom';
import DropdownMenu from '../components/projectdetails';
import SkillTags from '../components/projectskills';
import { Sprout } from 'lucide-react';

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
                <h3 className='text-black text-xl font-semibold font-poppins'>AI Commit Risk Analyser</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project for Opstree Solutions</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Developed Integrated Code Quality Platform</span>: Combined SonarQube and SonarCloud for comprehensive code analysis across 29 programming languages, ensuring consistent quality checks.
                </li>
                <li>
                  <span className='reshigh'>Automated and Enhanced Code Review</span>: Designed and deployed a Bug Frequency Server, utilizing historical data to predict the impact of code changes, leading to a 40% reduction in critical production bugs and integrated Large Language Model (LLM) for automated code reviews, reducing critical production bugs by 40% and improving review efficiency by 50%.
                </li>
                <li>
                  <span className='reshigh'>Optimized Severity Calculation and CI/CD Pipeline</span>: Created a multi-faceted severity calculator and streamlined SonarCloud setup with Git repositories, leading to a 30% improvement in issue prioritization accuracy and a 60% reduction in manual review time.
                </li>
                <li>
                  <span className='reshigh'>Innovative Severity Indexing and Documentation</span>: Developed a weighted mean system for Master Severity Index, increasing code quality gate pass rates by 25%, and delivered clear documentation for seamless Java Relay Server integration.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/ai-commit-risk-analyser/tree/main', text: 'Code' },
                  { href: 'https://ccom.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['SonarQube', 'SonarCloud', 'Python', 'JavaScript', 'Docker', 'Django', 'Java', 'SpringBoot', 'RestAPI', 'LLM', 'sklearn', 'MySQL', 'HTML', 'CSS']} />
            </VerticalTimelineElement>
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
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project for Nucleus Software Exports Limited</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  A replica of Nucleopedia I created for NSEL, this is a knowledge-based management system that centralizes work-related knowledge and training, achieving a 70% reduction in onboarding time for over 1500 employees, demonstrating innovation and attention to detail.
                </li>
                <li>
                  More Info for this can be found at the experiences page <Link to="/about" className="text-blue-500">here</Link>.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Use credentials (username: golchha, password: pass) to<span className='reshigh'> login as ADMIN.</span>
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/kbase-frontend', text: 'Frontend' },
                  { href: 'https://kbase.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['Java', 'SpringBoot', 'RestAPI', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'React', 'AWS', 'S3']} />
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
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/vtalk-frontend', text: 'Frontend' },
                  { href: 'https://conversia.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['Java', 'SpringBoot', 'RestAPI', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'React', 'WebSocket', 'S3', 'AWS']} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="January 2025 - Present"
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
                borderBottom: '12px solid #001f6f',
              }}
              icon={
                <img
                  src="/assets/icons/super.png"
                  alt="Super Tic Tac Toe Icon"
                  className="w-8 h-8"
                  style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                />
              }
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Super Tic Tac Toe AI</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Personal Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>AI-Powered Gameplay</span>: Implemented game theory concepts, including minimax algorithm and alpha-beta pruning, enabling the AI to make optimal moves efficiently.
                </li>
                <li>
                  <span className='reshigh'>Scalable Backend Development</span>: Built a robust backend using Flask Python to handle game logic, state management, and AI computations.
                </li>
                <li>
                  <span className='reshigh'>Dynamic User Interface</span>: Developed an interactive frontend in React, providing players with a seamless experience for multi-grid tic-tac-toe gameplay.
                </li>
                <li>
                  <span className='reshigh'>Real-Time Gameplay Analysis</span>: Integrated move evaluation metrics and visual feedback to enhance player engagement and learning.
                </li>
                <li>
                  <span className='reshigh'>Algorithm Optimization</span>: Fine-tuned AI performance, achieving faster decision-making while maintaining accuracy in strategic predictions.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/ultimate-tictactoe-frontend', text: 'Frontend' },
                  { href: 'https://github.com/darshan-golchha/ultimate-tic-tac-toe/tree/main', text: 'Backend' },
                  { href: 'https://super-tic-tac-toe.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['React', 'Flask', 'Python', 'JavaScript', 'Game Theory', 'Minimax', 'Alpha-Beta Pruning']} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="March 2024"
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
                borderBottom: '12px solid #228B22',
              }}
              icon={
                <img
                  src="/assets/icons/forefarm.png"
                  alt="ForeFarm Icon"
                  className="w-8 h-8"
                  style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                />
              }
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'></h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>MadHacks Hackathon Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Backend Development</span>: Built a Flask backend to handle API requests, securely connect to MongoDB, and execute machine learning predictions.
                </li>
                <li>
                  <span className='reshigh'>Machine Learning Integration</span>: Designed a pipeline for extreme weather prediction using Random Forest models trained on county-level data from 2019-2024.
                </li>
                <li>
                  <span className='reshigh'>Interactive Frontend</span>: Contributed to the React web app, implementing Mapbox for farmers to map their farmland interactively.
                </li>
                <li>
                  <span className='reshigh'>Authentication & Security</span>: Integrated Auth0 for secure user authentication and request authorization.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/forefarm', text: 'Backend' },
                  { href: 'https://forefarm.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['Python','Flask', 'MongoDB', 'React', 'Mapbox', 'Auth0', 'Machine Learning', 'Random Forest']} />
            </VerticalTimelineElement>

            <VerticalTimelineElement
              date="July 2024 - Present"
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
              icon={<img src="/assets/icons/infragen.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Infragen</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project for Opstree Solutions</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Designed and implemented a sophisticated React-based dynamic form</span> to efficiently gather comprehensive infrastructure requirements from users. The form features intuitive questions tailored to determine the optimal technologies for building and deploying applications, enhancing user experience and accuracy in capturing project needs.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Integrated a robust backend API</span> using Python and Django for seamless form submission and real-time updates. Leveraged Google Gemini LLM with advanced prompt engineering to deliver actionable content, improving the precision of infrastructure recommendations.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Enabled interactive modifications</span> to the generated infrastructure design through a chat interface. Users can easily adjust the content without repetitive information entry, leading to a 40% reduction in manual input and increasing user satisfaction by 30%.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Implemented real-time context saving</span> to ensure smooth transitions and modifications without losing previous inputs, thus enhancing the application's responsiveness and user engagement.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Introduced High-Level Design (HLD) generation</span> feature, providing users with a visual overview of their service architecture. This feature has resulted in a 25% improvement in project planning accuracy and has been well-received for its clarity in presenting infrastructure layouts.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/ai-infragen-backend', text: 'Backend' },
                  { href: 'https://github.com/darshan-golchha/ai-infragen', text: 'Frontend' },
                  { href: 'https://infragen.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['React', 'Python', 'Django', 'LLM', 'HTML', 'CSS', 'JavaScript', 'Caching']} />
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
              date="July 2024"
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
              icon={<img src="/assets/icons/pull.png" alt="AI Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>VCS Pull Requests Fetcher and Analyzer</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project for Opstree Solutions</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Integrated Multi-VCS Support</span>: Developed a system to fetch and analyze pull requests from GitLab, GitHub, and Bitbucket, ensuring compatibility with major version control systems and simplifying multi-repository management.
                </li>
                <li>
                  <span className='reshigh'>Automated Pull Request Fetching and Storage</span>: Implemented automated fetching and storage of pull requests, reducing manual effort by 70% and ensuring consistent data capture across repositories.
                </li>
                <li>
                  <span className='reshigh'>Enhanced Authentication Flexibility</span>: Provided options for both manual and default authentication, increasing user convenience and securing access to repositories, which led to a 50% improvement in user satisfaction.
                </li>
                <li>
                  <span className='reshigh'>Comprehensive Pull Request Analysis</span>: Designed methods to store detailed pull request data and diffs in CSV files, facilitating advanced analysis and reporting, and resulting in a 60% increase in actionable insights for development teams.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/pull-requests-dataextractor', text: 'Code' },
                ]} />
              </div>
              <SkillTags skills={['Python', 'Django', 'Git', 'GitHub', 'GitLab', 'BitBucket', 'Machine Learning', 'Data Cleaning', 'Data Processing', 'Visualisation']} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="July 2024"
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
                <h3 className='text-black text-xl font-semibold font-poppins'>Songs Searcher</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project for University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Developed a Song Searcher Application</span>: Engineered a robust application to search songs across various genres, artists, and languages, utilizing complex Regex to parse and load data from CSV files.
                </li>
                <li>
                  <span className='reshigh'>Implemented Red-Black Tree Data Structure</span>: Enhanced search efficiency by organizing song data into a Red-Black Tree, significantly improving retrieval times for song queries.
                </li>
                <li>
                  <span className='reshigh'>Designed Command Line Interface (CLI)</span>: Created an intuitive CLI for seamless interaction with the application, enabling users to load datasets, perform song searches, and obtain insightful data analyses.
                </li>
                <li>
                  <span className='reshigh'>Provided Comprehensive Data Insights</span>: Implemented additional functions to analyze song data, delivering valuable insights and statistics, thereby enriching the user experience and data understanding.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/song-searcher', text: 'Code' },
                ]} />
              </div>
              <SkillTags skills={['Java', 'Algorithms', 'Data Structures', 'Regex']} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="July 2024"
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
              icon={<img src="/assets/icons/llm.png" alt="AI Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Graph-based Social Network Analyzer</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project for University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Engineered a Graph-based Social Network</span>: Developed a dynamic social network using graphs and nodes, enabling efficient exploration and analysis of user connections.
                </li>
                <li>
                  <span className='reshigh'>Optimized Connection Search with Dijkstra's Algorithm</span>: Implemented Dijkstra's algorithm to determine the closest connections between users, enhancing the accuracy and speed of connection searches.
                </li>
                <li>
                  <span className='reshigh'>Developed User Statistics Tracking</span>: Designed functionalities to track and report user statistics, including the number of friendships, average friends per user, and other relevant metrics, providing valuable insights into the network's structure.
                </li>
                <li>
                  <span className='reshigh'>Created a CLI-based Frontend</span>: Built a command line interface for user interaction, facilitating seamless searches through connections and easy access to user statistics, thereby improving user engagement and data accessibility.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/social-network', text: 'Code' },
                ]} />
              </div>
              <SkillTags skills={['Java', 'Algorithms', 'Data Structures', 'Graph Theory', 'Dijkstra Algorithm']} />
            </VerticalTimelineElement>
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
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Work Project for Opstree Solutions</p>
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
              <SkillTags skills={['Python', 'sklearn', 'MatplotLib', 'Machine Learning']} />
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
              date="December 2024"
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
              icon={<img src="/assets/icons/detect.png" alt="Spy Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div>
                <h3 className='text-black text-xl font-semibold font-poppins'>Spy Fall Game</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Personal Project</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>Developed a web-based version of the popular Spy Fall game</span> using React and Javascript, allowing users to play the game online with friends.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  <span className='reshigh'>The game involves players guessing the spy among them</span> based on limited information, promoting critical thinking and social interaction.
                </li>
              </ul>
              <div className='top-0 right-0 absolute flex gap-6 rounded-lg p-1'>
                <DropdownMenu links={[
                  { href: 'https://github.com/darshan-golchha/spyfall', text: 'Code' },
                  { href: 'http://spy.darshangolchha.com', text: 'Webpage' }
                ]} />
              </div>
              <SkillTags skills={['HTML', 'CSS', 'JavaScript', 'React']} />
            </VerticalTimelineElement>
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
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project for University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Developed an efficient recursive change-making algorithm in Java.</li>
                <li>Achieved a 20% reduction in the number of coins required for a given value, optimizing coin usage.</li>
                <li>Enhanced algorithm runtime by 15% through the implementation of BST operations.</li>
                <li>Ensured algorithm correctness through comprehensive unit testing, showcasing attention to detail and quality assurance skills with a reduction in bugs by 100%.</li>
              </ul>
              <SkillTags skills={['Java', 'Algorithms', 'Data Structures']} />
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
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project for University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Engineered a highly efficient Twiterator in a singly-linked list data structure in Java, reducing memory usage by 25%.</li>
                <li>Implemented user-friendly commands, enhancing user customization by 20% through effective teamwork.</li>
                <li>Introduced a "High Likes Ratio" filter, showcasing user empathy and creativity in enhancing user experience with a 30% higher ratio of likes to total interactions.</li>
              </ul>
              <SkillTags skills={['Java', 'Data Structures', 'Algorithms']} />
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
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Academic Project for University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>Executed complex MySQL queries to efficiently retrieve and analyze data, demonstrating analytical skills and attention to detail in maintaining a 95% accuracy rate in Data Extraction.</li>
                <li>Employed pandas DataFrames in Python to streamline data processing time with a 20% improvement.</li>
              </ul>
              <SkillTags skills={['Python', 'MySQL', 'Data Analysis']} />
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
