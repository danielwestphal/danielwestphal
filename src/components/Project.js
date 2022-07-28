import React from 'react'
import '../styles/App.css'
import '../styles/Project.css'
import Ajax from "../images/ajax.png"

export default function Project(props) {
    return (
        <div className="project">
            <img className="project" src={Ajax} alt="project!" />
        </div>
    );
};