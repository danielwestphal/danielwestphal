import React from "react"
import "../styles/App.css"
import "../styles/NavBar.css"
import logo from "../images/logo.svg"
//import Resume from "../documents/resume.pdf"

export default function NavBar(props) {
    let headers = [{
        link: "/",
        name: "Home"
    },
    {
        link: "/about",
        name: "About"
    },
    {
        link: "/portfolio",
        name: "Portfolio"
    }]
    return (
        <div>
            <div className="name">
                <img src={logo} alt="logo" className="logo"></img>
                <a href="/">Daniel Westphal</a>
            </div>
            <div className="links">
                {headers.map(header => {
                    let select = "null";
                    if (header.name === props.selected) {
                        select = "selected"
                    }

                    return <a href={header.link} className={select} > {header.name} </a>
                })}
                <a href="/resume" onClick={(e) => {/* window.open(Resume, "_blank") */ }}>Resume</a>
            </div>
        </div>)
}