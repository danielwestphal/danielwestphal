import React from "react"
import "../styles/App.css"
import "../styles/NavBar.css"
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
        <div className="links">
            {headers.map(header => {
                let select = "null";
                if (header.name === props.selected){
                    select = "selected"
                }

                return <a href={header.link} className={select} > {header.name} </a>
            })}
            <a href="#1" onClick={(e) => {/* window.open(Resume, "_blank") */ }}>Resume</a>
        </div>)
}