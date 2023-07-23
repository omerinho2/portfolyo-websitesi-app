import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi , my name is ÖMER</h2>
         <div className='prompt'>
            <p>A software developer with a passion for learning and creating</p>
            <EmailIcon/>
            <GitHubIcon/>
            <LinkedInIcon/>
         </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>React,Angular,Redux,Html,Css,React Native</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Nodejs,Java,.Net,Expressjs</span>
            </li>
            <li className='item'>
                <h2>Programming Languages</h2>
                <span>Javascript,Java,Phyton</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
