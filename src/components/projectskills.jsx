import React from 'react';

// Map skill names to their corresponding icon paths
const skillIconMap = {
    SonarQube: '/assets/icons/sonarqube.svg',
    SonarCloud: '/assets/icons/sonarcloud.svg',
    Python: '/assets/icons/python.svg',
    JavaScript: '/assets/icons/javascript.svg',
    Docker: '/assets/icons/docker.svg',
    Java: '/assets/icons/java.svg',
    C: '/assets/icons/c.svg',
    HTML: '/assets/icons/html.svg',
    CSS: '/assets/icons/css.svg',
    React: '/assets/icons/react.svg',
    MySQL: '/assets/icons/mysql.svg',
    Git: '/assets/icons/git.svg',
    MongoDB: '/assets/icons/mongo.svg',
    SpringBoot: '/assets/icons/spring.svg',
    RestAPI: '/assets/icons/rest.svg',
    WebSocket: '/assets/icons/websocket.svg',
    TailwindCSS: '/assets/icons/tailwindcss.svg',
    ThreeJS: '/assets/icons/three.svg',
    Django: '/assets/icons/django.svg',
    LLM: '/assets/icons/llm.png',
    sklearn: '/assets/icons/scikit-learn.svg',
    Caching: '/assets/icons/cache.png',
    AWS: '/assets/icons/aws.svg',
    S3: '/assets/icons/s3.svg',
    GitHub: '/assets/icons/github.svg',
    GitLab: '/assets/icons/gitlab.svg',
    BitBucket: '/assets/icons/bitbucket.png',
    Flask: '/assets/icons/flask.png',
    ReactNative: '/assets/icons/react.svg',
    // Add more skills and their icons here
};

const SkillTags = ({ skills }) => {
    return (
        <div className='flex flex-wrap gap-2 mt-4'>
            {skills.map(skill => (
                <div key={skill} className='flex items-center gap-2 bg-gray-200 rounded-full p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>
                    {skillIconMap[skill] && <img src={skillIconMap[skill]} alt={skill} className='w-5 h-5' />}
                    <span className='text-sm font-medium'>{skill}</span>
                </div>
            ))}
        </div>
    );
};

export default SkillTags;
