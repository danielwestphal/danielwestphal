import React from 'react'
import '../styles/App.css'
import '../styles/Portfolio.css'
import NavBar from "../components/NavBar"
import Project from '../components/Project'
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
                        {digitalArt && <svg className="check" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.94167L9.30435 16.875L23 2" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>}
                        Digital Art
                    </div>
                </button>
                <button className={UIUX ? 'filter_clicked' : 'filter'} onClick={toggleUIUX}>
                    <div className='text'>
                        {UIUX && <svg className="check" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.94167L9.30435 16.875L23 2" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" /></svg>}
                        UI / UX
                    </div>
                </button>
                <button className={program ? 'filter_clicked' : 'filter'} onClick={toggleProgram}>
                    <div className='text'>
                        {program && <svg className="check" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8.94167L9.30435 16.875L23 2" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" /></svg>}
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
                <svg className="uparrow" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1673 36.5L16.4561 40.7888L33.459 23.8163L33.459 60.8334L39.5423 60.8334L39.5423 23.8163L56.5148 40.8192L60.834 36.5L36.5007 12.1667L12.1673 36.5Z" />
                </svg>

                <h3>Return to Top</h3>
            </div>}

        </div>

    );
};