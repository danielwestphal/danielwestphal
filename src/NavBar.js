import React from "react"
import "./styles/App.css"
import "./styles/NavBar.css"

export function NavBar(props) {
    return (
        <div id="NavBar">
        <ol>
            <li> <a className="Nav" href="#1">About Me</a> </li>
                <li> <a className="Nav" href="#1"> Experience </a> </li>
                <li> <a className="Nav" href="#1">Honors</a> </li>
                <li> <a className="Nav" href="#1">Projects</a> </li>
                <li> <a className="Nav" href="#1">Things I Like</a> </li>

        </ol>
            
        </div>)
}