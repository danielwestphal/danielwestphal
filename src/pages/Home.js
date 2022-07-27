import "../styles/App.css"
import "../styles/Home.css"
import "../styles/Circles.css"
import GitHub from '../images/github.svg';
import LinkedIn from '../images/linkedin.svg';
import Mail from '../images/mail.svg'
import React from "react"
import NavBar from "../components/NavBar"


export default function Home(props) {

    return (

        <div className="Home">
            <div>
                <ul className="circles">
                    {new Array(10).fill(<li></li>)}
                </ul>
            </div>

            <NavBar selected="Home" />



            <div className="about">
                <h1 id="name">Hi, I'm <em className="accent">Daniel</em></h1>
                <h2 id="title">Software Engineer & Designer </h2>
                <p id="bio">
                    I'm interested in how universal design can help to alleviate societal issues.
                    <br />
                    <br />
                    Currently looking for <b>full time software engineering positions for 2023!</b>
                    <br />
                    <br />
                    Contact Me:

                </p>
            </div>

            <div>
                <div style={{ height: '4vw' }}>

                    <a href="https://github.com/danielwestphal" target="_blank" rel="noopener noreferrer">
                        <img src={GitHub} alt="GitHub Logo" />
                        @danielwestphal
                    </a>
                </div>
                <br />
                <div>
                    <a href="https://www.linkedin.com/in/danielwestphal" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn Logo" />
                        Daniel Westphal
                    </a>
                </div>
                <br />
                <div>
                    <a href="mailto:dew.23@dartmouth.edu" target="_top">
                        <img src={Mail} alt="Envelope" />
                        dew.23@dartmouth.edu
                    </a>
                </div>

            </div>


        </div>
    );
}