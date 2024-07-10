import React from 'react'
import HomeInfo from './HomeInfo'
import ContactInfo from './ContactInfo'
import { Link } from 'react-router-dom'

const Info = ({ text, link, btnTxt, isExternal }) => (
    <div className='info-box'>
        {text}
        {isExternal ? (
            <a href={link} className='btn' target='_blank' rel='noopener noreferrer'>{btnTxt}</a>
        ) : (
            <Link to={link} className='btn'>{btnTxt}</Link>
        )}
    </div>
)

const renderContent = {
    1: (
        <HomeInfo />
    ),
    4: (
        <Info
        text={"Download my resume for an in-depth look at my skills, experiences, and achievements. Last Updated: 21st June, 2024"}
        btnTxt={"Get My Resume"} link={"/assets/docs/Resume.pdf"} isExternal={true}
         />
    ),
    2: (
        <Info 
        text={"Learn more about my journey, skills, and experiences that have shaped my career in computer science and data science."} 
        btnTxt={"About Me"} link={"/about"}/>
    ),
    3: (
        <Info 
        text={"Check out the innovative projects I have worked on, showcasing my skills in software development, data science, and problem-solving."}
        btnTxt={"Projects"} link={"/projects"}
        
        />
    ),
    5: (
        <ContactInfo />
    )
}

const Popup = ({ currentStage, setCurrentStage }) => {
    return renderContent[currentStage] || null;
}

export default Popup
