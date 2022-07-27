import React from 'react'
import '../styles/App.css'
import '../styles/About.css'
import NavBar from "../components/NavBar"

export default function About(props) {
    return (
        <div className="About">
            <NavBar selected="About" />
            <h1 className='title'> My <em> life</em> at a glance</h1>
        </div>

    );
};