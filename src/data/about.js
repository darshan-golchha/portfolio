export const aboutIntro = 'A Computer Science and Data Science student at UW Madison.';

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C'] },
  { group: 'Frameworks', items: ['React', 'Spring Boot', 'Django', 'Flask', 'Tailwind CSS'] },
  { group: 'Data', items: ['MySQL', 'MongoDB', 'Firebase'] },
  { group: 'Cloud & infra', items: ['AWS', 'S3', 'GCP', 'Docker'] },
  { group: 'APIs & messaging', items: ['REST APIs', 'WebSocket', 'Twilio'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'GitLab'] },
];

export const testimonials = [
  {
    name: 'Sandeep Rawat',
    title: 'Co-Founder and CTO at Opstree Solutions',
    date: 'August 2024',
    quote:
      'Darshan interned with us on our product, BuildPiper, and the impact he made in such a short time was remarkable. His ability to conduct proof of concepts and explore new technologies is impressive, but what truly sets him apart is his sense of ownership and follow-through, like that of a seasoned professional. I highly recommend him as an ideal hire for any company and any domain.',
    href: 'https://www.linkedin.com/in/darshan-golchha/',
  },
  {
    name: 'Ashish Korla',
    title: 'Business Analyst at Nucleus Software Exports Limited',
    date: 'June 2023',
    quote:
      'Indeed it was a delightful experience having you here at Nucleus Software, we were pleasantly surprised to see the professionalism demonstrated by you at such a young level... we wish you great success!!!',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7096794911282216960?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7096794911282216960%2C7097547687343894530%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287097547687343894530%2Curn%3Ali%3Aactivity%3A7096794911282216960%29',
  },
];

// Grouped list for the "Recognition & activities" section.
export const recognition = [
  {
    group: 'Activities',
    items: [
      {
        title: 'Wisconsin Robotics',
        subtitle: 'Member of Software Team',
        date: 'December 2023 – February 2024',
        bullets: [
          'Worked on Short Range Navigation Task that is responsible for object detection.',
          'Trained a TensorFlow model to detect Orange Mallet and 1L Wide Mouth Water Bottle.',
          'Fine tuned the model to detect the objects in real time.',
        ],
        links: [],
      },
    ],
  },
  {
    group: 'Awards',
    items: [
      {
        title: "Dean's List Academic Honor",
        subtitle: 'Issued by University of Wisconsin-Madison',
        date: 'Fall 2022, Spring 2023, Fall 2023',
        bullets: [
          'This honor is bestowed on students who carried at least twelve graded degree credits with the requisite grade point average - 3.600 for freshman and sophomores, and 3.850 for juniors and seniors.',
        ],
        links: [],
      },
      {
        title: 'Scholastic Excellence Award',
        subtitle: 'Issued by G.D Goenka Public School, Siliguri',
        date: 'March 2016 (for 2013–2015) & March 2019 (for 2016–2018)',
        bullets: [
          'The aim of this award is encouragement and recognition of excellence. Any student who maintains high marks in all subjects over a period of 3 years is eligible for this award.',
          'This scheme has been developed to identify and encourage students with outstanding academic ability so that they are motivated to excel at each level.',
        ],
        links: [
          { label: 'Award photo 1', href: '/assets/images/award1.jpg' },
          { label: 'Award photo 2', href: '/assets/images/award2.jpg' },
        ],
      },
      {
        title: 'Scholar Badge',
        subtitle: 'Issued by Delhi Public School, Vasant Kunj',
        date: 'May 2021',
        bullets: ['Given in the first or second instances of Excellence in Academics.'],
        links: [{ label: 'View certificate', href: '/assets/docs/scholar_badge.pdf' }],
      },
    ],
  },
  {
    group: 'Certifications',
    items: [
      {
        title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
        subtitle: 'Issued by Coursera',
        date: 'May 2024',
        bullets: [
          'Learned best practices for using TensorFlow, a popular open-source machine learning framework.',
          'Built a basic neural network in TensorFlow',
          'Trained a neural network for a computer vision application',
          'Learned how to use convolutions to improve your neural network',
        ],
        links: [{ label: 'View certificate', href: 'https://coursera.org/share/2d7d4994c3cb479c5f944303fa63f1bc' }],
      },
      {
        title: 'HTML and CSS in depth',
        subtitle: 'Issued by Coursera',
        date: 'March 2023',
        bullets: [
          'Creating a simple form with a responsive layout using HTML5 and CSS',
          'Creating a UI using Bootstrap and implementing debugging tools.',
        ],
        links: [{ label: 'View certificate', href: 'https://coursera.org/share/0449273cd42970ac913c293a0da7f3ae' }],
      },
    ],
  },
];
