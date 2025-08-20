import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import va from '../../assets/va.png'
import lms from '../../assets/lms.png'
import ec from '../../assets/ec.png'
import rt from '../../assets/rt.png'
import yt from '../../assets/yt.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function Projects() {
  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        
        start: "top 80%",
        end:"top 30%"
      }
      
    })
    gsap.from(".slider", {
    x: 100,               // slide from right
    opacity: 0,           // fade in
    duration: 1,
    stagger: 1,         // delay between each card
    scrollTrigger: {
      trigger: ".slider",
      scroller: "body",
      scrub:2,
      start: "top 80%",    // when slider hits 80% viewport
       end:"top 30%",
    
    }
  });
    
    
  })
  
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