import React from 'react'
import "./Home.css"
import shiv from "../../assets/shiv.png"

// import man from "../../assets/man.png"
import { Typewriter } from 'react-simple-typewriter'
function Home() {
  return (
    <div id="home">
     <div className="lefthome">
      
      <div className="homedetails">
        <div className="line1" style={{fontWeight: "bold"}}>I'M</div>
        <div className="line2">SHIV SINGH BAGHEL</div>
        <div className="line3"> 
          <span style={{ color: "", fontWeight: "bold" }}>
          <Typewriter
            words={["FULL STACK WEB DEVLOPER ", "SOFTWARE DEVELOPER","PYTHON DEVLOPER", "PROBLEM SOLVER 🚀"]}
            loop={0} // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
        </div>
        <button>HIRE ME</button>
      </div>
     

     </div>
     <div className="righthome">
      <img src={shiv} alt=""  />
     </div>


    </div>
  )
}

export default Home