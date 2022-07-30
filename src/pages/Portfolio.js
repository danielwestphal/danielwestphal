import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"
import Project from '../components/Project'
import ArrowUp from "../components/ArrowUp"
import check from "../images/check.svg"
import { portfolio } from '../data/portfolio'

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

    const filtered_portfolio = portfolio.filter(proj => {
        let tags = [];
        if (digitalArt) tags.push("Digital Art");
        if (UIUX) tags.push("UI / UX");
        if (program) tags.push("Programming");
        for (const x of proj.tags) {
            for (const t of tags) {
                if (x === t) return true;
            }
        }
        return false;
    });

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
                {filtered_portfolio.map((proj, i) => { return (<Project data={proj} key={i} />) })}

            </div>
            {filtered_portfolio.length === 0 &&
                <div>
                    <br />
                    <h2 style={{ textAlign: 'center' }}>
                        Nothing Matches your Query :(
                    </h2>
                    <br />
                    <h3>
                        Try Adding some Filters!
                    </h3>
                </div>}
            {filtered_portfolio.length !== 0 && <div onClick={() => goTo(nextSection)} style={{ cursor: 'pointer' }}>
                <ArrowUp />
                <h3>Return to Top</h3>
            </div>}

        </div>

    );
};