import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"

export default function Portfolio(props) {
    return (
        <div className="Portfolio">
            <NavBar selected = "Portfolio"/>
            <h1 className='title'> <em> Projects</em> I've worked on</h1>
        </div>
        
    );
};