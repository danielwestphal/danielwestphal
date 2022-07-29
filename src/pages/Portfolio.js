import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"
import Project from '../components/Project'
import ArrowUp from "../components/ArrowUp"
import check from "../images/check.svg"

export default function Portfolio(props) {
    const nextSection = React.useRef();
    const goTo = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", })
    }

    const [digitalArt, setDigitalArt] = React.useState(true);

    const toggleDA = () => {
        setDigitalArt(!digitalArt);
    }

    const [UIUX, setUIUX] = React.useState(true);

    const toggleUIUX = () => {
        setUIUX(!UIUX);
    }

    const [program, setProgram] = React.useState(true);

    const toggleProgram = () => {
        setProgram(!program);
    }

    return (
        <div className="Portfolio" ref={nextSection}>
            <NavBar selected="Portfolio" />
            <h1 className='title'> <em> Projects</em> I've worked on</h1>
            <div className='filters'>
                <button className={digitalArt ? 'filter_clicked' : 'filter'} onClick={toggleDA}>
                    <div className='text'>
                        {digitalArt && <img className="check" src={check} alt="check"></img>}
                        Digital Art
                    </div>
                </button>
                <button className={UIUX ? 'filter_clicked' : 'filter'} onClick={toggleUIUX}>
                    <div className='text'>
                        {UIUX && <img className="check" src={check} alt="check"></img>}
                        UI / UX
                    </div>
                </button>
                <button className={program ? 'filter_clicked' : 'filter'} onClick={toggleProgram}>
                    <div className='text'>
                        {program && <img className="check" src={check} alt="check"></img>}
                        Programming
                    </div>
                </button>
            </div>
            <div className='projects'>
                {[0, 0, 0, 0, 0, 0, 0].map(e => { return (<Project />) })}
            </div>
            <div onClick={() => goTo(nextSection)} style={{ cursor: 'pointer' }}>
                <ArrowUp />
                <h3>Return to Top</h3>
            </div>

        </div>

    );
};