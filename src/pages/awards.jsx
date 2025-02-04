import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const awards = () => {

  const [showSe, setShowSe] = useState(false);


  return (
    <div className='bg-white'>
      <h1 className="subhead-text mt-16 p-8 pb-0">
        Activities
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>Pursuing diverse interests and passions.</p>
      </div>
      <div className="flex flex-col p-8 pt-0">
        <div className='mt-0 flex'>
          <VerticalTimeline layout='1-column-left'>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>December 2023 - Present</span>
              </p>}
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
                borderBottom: '12px solid purple',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/images/wr.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Wisconsin Robotics</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Member of Software Team</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Worked on Short Range Navigation Task that is responsible for object detection.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Trained a TensorFlow model to detect Orange Mallet and 1L Wide Mouth Water Bottle.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Fine tuned the model to detect the objects in real time.
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <h1 className="subhead-text mt-0 p-8 pb-0 pt-0">
        Awards
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>Showcasing excellence in academics, each representing a unique achievement and commitment.</p>
      </div>
      <div className="flex flex-col p-8 pt-0">
        <div className='mt-0 flex'>
          <VerticalTimeline layout='1-column-left'>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>Fall 2022, Spring 2023, Fall 2023</span>
              </p>}
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
                borderBottom: '12px solid #b6a22f',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/award.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Dean's List Academic Honor</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Issued by University of Wisconsin-Madison</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  This honor is bestowed on students who carried at least twelve graded degree credits with the requisite grade point average - 3.600 for freshman and sophomores, and 3.850 for juniors and seniors.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>March 2016</span> For Years: (2013,2014,2015) & <span className='font-semibold text-black'>March 2019</span> For Years: (2016,2017,2018)
              </p>}
              iconStyle={{
                background: 'white',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
              }}
              onTimelineElementClick={() => { setShowSe(true) }}
              contentStyle={{
                boxShadow: 'none',
                borderBottom: '12px solid #b6a22f',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/award.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Scholastic Excellence Award</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Issued by G.D Goenka Public School, Siliguri</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  The aim of this award is encouragement and recognition of excellence. Any student who maintains high marks in all subjects over a period of <span className='font-semibold'>3 years</span> is eligible for this award.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  This scheme has been developed to identify and encourage students with outstanding academic ability so that they are motivated to excel at each level.
                </li>
              </ul>
              {showSe &&
                <div className='flex items-center justify-center gap-8'>
                  <img src="/assets/images/award1.jpg" alt="Project Icon" className="w-[30%] animate-fadeIn" />
                  <img src="/assets/images/award2.jpg" alt="Project Icon" className="w-[30%] animate-fadeIn" />
                </div>
              }
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>May 2021</span>
              </p>}
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
                borderBottom: '12px solid #b6a22f',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/award.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Scholar Badge</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Issued by Delhi Public School, Vasant Kunj</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Given in the first or second instances of Excellence in Academics.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  {/* Providing a link to the certificate */}
                  <a href="/assets/docs/scholar_badge.pdf" target="_blank" rel="noreferrer" className='text-black-500 hover:text-blue-500'>View Certificate</a>
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <h1 className="subhead-text mt-0 p-8 pb-0 pt-0">
        Certifications
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>Recognized qualifications showcasing my expertise.</p>
      </div>
      <div className="flex flex-col p-8 pt-0">
        <div className='mt-0 flex'>
          <VerticalTimeline layout='1-column-left'>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>May 2024</span>
              </p>}
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
                borderBottom: '12px solid purple',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/cert.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Issued by Coursera</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Learned best practices for using TensorFlow, a popular open-source machine learning framework.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Built a basic neural network in TensorFlow
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Trained a neural network for a computer vision application
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Learned how to use convolutions to improve your neural network
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  {/* Providing a link to the certificate */}
                  <a href="https://coursera.org/share/2d7d4994c3cb479c5f944303fa63f1bc" target="_blank" rel="noreferrer" className='text-black-500 hover:text-blue-500'>View Certificate</a>
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>March 2023</span>
              </p>}
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
                borderBottom: '12px solid purple',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/cert.png" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>HTML and CSS in depth</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Issued by Coursera</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <li className='text-black font-normal pl-1 text-small'>
                  Creating a simple form with a responsive layout using HTML5 and CSS
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  Creating a UI using Bootstrap and implementing debugging tools.
                </li>
                <li className='text-black font-normal pl-1 text-small'>
                  {/* Providing a link to the certificate */}
                  <a href="https://coursera.org/share/0449273cd42970ac913c293a0da7f3ae" target="_blank" rel="noreferrer" className='text-black-500 hover:text-blue-500'>View Certificate</a>
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
      <h1 className="subhead-text mt-0 p-8 pb-0 pt-0">
        Testimonials
      </h1>
      <div className="pl-8 pt-0 text-slate-500">
        <p>What others say about my work.</p>
      </div>
      <div className="flex flex-col p-8 pt-0">
        <div className='mt-0 flex'>
          <VerticalTimeline layout='1-column-left'>
          <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>August 2024</span>
              </p>}
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
                borderBottom: '12px solid purple',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/test.svg" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Sandeep Rawat</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Co-Founder and CTO at Opstree Solutions</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <blockquote class="border-l-4 border-gray-700 italic p-4 my-4">
                  <p class="text-gray-900">Darshan interned with us on our product, BuildPiper, and the impact he made in such a short time was remarkable. His ability to conduct proof of concepts and explore new technologies is impressive, but what truly sets him apart is his sense of ownership and follow-through, like that of a seasoned professional. I highly recommend him as an ideal hire for any company and any domain.</p>
                </blockquote>
                <li className='text-black font-normal pl-1 text-small'>
                  {/* Providing a link to the certificate */}
                  <a href="https://www.linkedin.com/in/darshan-golchha/" target="_blank" rel="noreferrer" className='text-black-500 hover:text-blue-500'>View Testimonial</a>
                </li>
              </ul>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              date={<p>
                <span className='font-semibold text-black'>June 2023</span>
              </p>}
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
                borderBottom: '12px solid purple',
                position: 'relative', // Add this to position the SVG icon within the content
              }}
              icon={<img src="/assets/icons/test.svg" alt="Project Icon" className="w-8 h-8" style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
            >
              <div style={{ position: 'relative' }}>
                <h3 className='text-black text-xl font-semibold font-poppins'>Ashish Korla</h3>
                <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>Business Analyst at Nucleus Software Exports Limited</p>
              </div>
              <ul className='my-5 list-disc ml-5 space-y-2'>
                <blockquote class="border-l-4 border-gray-700 italic p-4 my-4">
                  <p class="text-gray-900">Indeed it was a delightful experience having you here at Nucleus Software, we were pleasantly surprised to see the professionalism demonstrated by you at such a young level... we wish you great success!!!</p>
                </blockquote>
                <li className='text-black font-normal pl-1 text-small'>
                  {/* Providing a link to the certificate */}
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7096794911282216960?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7096794911282216960%2C7097547687343894530%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287097547687343894530%2Curn%3Ali%3Aactivity%3A7096794911282216960%29" target="_blank" rel="noreferrer" className='text-black-500 hover:text-blue-500'>View Testimonial</a>
                </li>
              </ul>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default awards