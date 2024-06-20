import React from 'react'
import HomeInfo from './HomeInfo'
import ContactInfo from './ContactInfo'
import { Link } from 'react-router-dom'



const Info = ({ text, link, btnTxt })=> (
    <div className='info-box'>
        {text}
        <Link to={link} className='btn'>{btnTxt}</Link>
    </div>
)

const renderContent = {
    1: (
        <HomeInfo />
    ),
    4: (
        <Info
        text={"Want to learn more about my professional journey and detailed accomplishments? Download my resume for an in-depth look at my skills, experiences, and achievements. Click below to access my resume."}
        btnTxt={"Get My Resume"} link={"/resume"}
         />
    ),
    2: (
        <Info 
        text={"Learn more about my journey, skills, and experiences that have shaped my career in computer science and data science. Click below to explore my story and see how I can help solve your problems with innovative solutions."} 
        btnTxt={"About Me"} link={"/about"}/>
    ),
    3: (
        <Info 
        text={"Check out the innovative projects I have worked on, showcasing my skills in software development, data science, and problem-solving. Click below to dive into my portfolio and see the solutions I've built."}
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