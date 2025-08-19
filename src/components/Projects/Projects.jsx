import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'

function Projects() {
  return (
    <div id="projects">
      <h1>1+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        <Card title="" image={va}/>
        <Card title="" image={va}/>
        <Card title="" image={va}/>
        <Card title="" image={va}/>
      </div>
    </div>
  )
}

export default Projects