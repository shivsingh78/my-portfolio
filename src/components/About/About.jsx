import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import python from '../../assets/python.png'
import dsa from '../../assets/dsa.png'
function About() {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info </h1>
            <ul>
              <li> <span>Name</span> : SHIV SINGH BAGHEL</li>
              <li><span>AGE</span>: 20 YEARS</li>
              <li><span>GENDER</span>: MALE</li>
              <li><span>LANGUAGE KNOWN</span>: HINDI , ENGLISH</li>
            </ul>
          </div>
          <div className="education">
            <h1>Education </h1>
            <ul>
              <li> <span>DEGREE</span> : B-TECH</li>
              <li><span>BRANCH</span>: INFORMATION TECHNOLOGY</li>
              <li><span>UNIVERSITY NAME </span>: RGPV University, Bhopal</li>
              <li><span>DURATION</span>: 2023 - 2027 </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills </h1>
            <ul>
              <li>MERN STACK WEB DEVELOPER</li>
              <li>PYTHON DEVELOPER</li>
              <li>DSA , SYSTEM DESIGN</li>
              
            </ul>
          </div>


        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="PYTHON" image={python}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About