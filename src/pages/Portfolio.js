import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"
import Project from '../components/Project'

export default function Portfolio(props) {
    return (
        <div className="Portfolio">
            <NavBar selected = "Portfolio"/>
            <h1 className='title'> <em> Projects</em> I've worked on</h1>
            <div className='filters'>
                <button className='filter'>Digital Art</button>
                <button className='filter'>UI / UX</button>
                <button className='filter'>Programming</button>
            </div>
            <div className='projects'>
                {[0,0,0,0,0,0,0].map(e => {return (<Project />)})}
            </div>
        </div>
        
    );
};