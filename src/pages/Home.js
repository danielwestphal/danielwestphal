import "../styles/App.css"
import "../styles/AboutMe.css"
import "../styles/Circles.css"
import React from "react"
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
//import Resume from "./documents/resume.pdf"
import CircleDown from "../components/CircleDown"


export default function Home(props) {

    return (

        <div className="AboutMe">
            <div>
                <ul className="circles">
                    {new Array(10).fill(<li></li>)}
                </ul>
            </div>

            <div className="links">
                
                <a href="https://github.com/danielwestphal" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub Logo" />
                    </a>
                
                <a href="https://www.linkedin.com/in/danielwestphal" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn Logo" />
                </a>
            </div>


            <div className="about">
                <h1 id="name">Hi! I'm Daniel!</h1>
                <h2 id="title">Software Engineer & Designer </h2>
                <p id="bio">
                    I'm a rising senior at <b>Dartmouth College</b> double majoring in
                    <b> Computer Science Modified with Human Centered Design</b> and <b>Physics</b>.
                    I'm interested in how accessible design can help to alleviate societal issues.
                </p>

                <button className="info" onClick={(e) => { /*window.open(Resume, "_blank")*/ }}>
                    Download My Resume
                </button>
                <button className="info" onClick={() => window.location = 'mailto:daniel.e.westphal.23@dartmouth.edu'}>
                    Contact Me!
                </button>
            </div>

            <CircleDown goTo={props.goTo} />



        </div>
    );
}