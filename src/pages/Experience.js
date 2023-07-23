import React from 'react'
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


function Experience() {
  return (
    <div className='expContainer'>
      <div className='expElements'>
        <ol>
          <li>
            <SchoolIcon/>
            <h3>High School Graduation 2K17</h3>
            <p>Bahçe Şehir Koleji</p>
          </li>
          <li>
            <SchoolIcon/>
            <h3>University Graduation 2K23</h3>
            <p>Cag University</p>
          </li>
          <li>
            <BusinessCenterIcon/>
            <h3>My First Job As a Front-End Dev 2k22</h3>
            <p>recuno.com</p>
          </li>
          <li>
            <QuestionMarkIcon/>
            <h3>...............</h3>
            <p>......................?</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Experience
