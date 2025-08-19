import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import va from '../../assets/va.png'
import lms from '../../assets/lms.png'
import ec from '../../assets/ec.png'
import rt from '../../assets/rt.png'
import yt from '../../assets/yt.png'

function Projects() {
  return (
    <div id="projects">
      <h1 id='para'>1+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        <Card title="LEARNING MANAGEMENT SYSTEM" image={lms}/>
        <Card title="E-COMMERCE STORE" image={ec}/>
        <Card title="REAL TIME COMMUNICATION APP" image={rt}/>
        <Card title="BACKEND FOR YOUTUBE" image={yt}/>
        
      </div>
    </div>
  )
}

export default Projects