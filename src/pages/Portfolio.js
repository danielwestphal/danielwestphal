import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"
import Project from '../components/Project'
import ArrowUp from "../components/ArrowUp"

export default function Portfolio(props) {
    const nextSection = React.useRef();
    const goTo = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", })
    }
    return (
        <div className="Portfolio" ref={nextSection}>
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
            <div onClick={() => goTo(nextSection)} style={{cursor: 'pointer'}}>
                <ArrowUp/>
                <h3>Return to Top</h3>
            </div>
            
        </div>
        
    );
};