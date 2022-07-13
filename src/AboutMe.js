import "./App.css"
import "./AboutMe.css"
import React from "react"
import GitHub from './images/github.svg';
import LinkedIn from './images/linkedin.svg';
import Resume from "./documents/resume.pdf"
import CircleDown from "./components/CircleDown"


export function AboutMe() {

    return (
        <div className="AboutMe">

            <div className="links">
                <img src={GitHub} alt="GitHub Logo"></img>
                <a href="https://www.linkedin.com/in/danielwestphal">GitHub</a>
                <img src={LinkedIn} alt="LinkedIn Logo"></img>
                <a href="https://www.linkedin.com/in/danielwestphal">LinkedIn</a>
            </div>


            <div className="about">
                <h1 id="name">Hi! I'm Daniel!</h1>
                <h2 id="title">Software Engineer & Designer </h2>
                <p id="bio">
                    I'm a rising senior at <b>Dartmouth College</b> double majoring in
                    <b> Computer Science Modified with Human Centered Design</b> and <b>Physics</b>.
                    I'm paticularly interested in how accessible design can help to alleviate societal issues.
                </p>

                <button onClick={(e) => { window.open(Resume, "_blank")}}>
                    Download My Resume
                </button>
                <button onClick={() => window.location = 'mailto:daniel.e.westphal.23@dartmouth.edu'}>
                    Contact Me!
                </button>
            </div>

            <CircleDown />

        </div>
    );
}