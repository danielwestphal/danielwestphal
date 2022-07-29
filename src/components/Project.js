import React from 'react'
import '../styles/App.css'
import '../styles/Project.css'
import Ajax from "../images/ajax.png"

export default function Project(props) {
    const [info, setInfo] = React.useState(false);

    return (
        <div className="project" onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}>
            <img className={info ? "project blur" : "project"} src={Ajax} alt="project!" />
            {info &&
                (<div className='info'>
                    <div className='information'>
                        <h5>
                            Ajax
                        </h5>
                        <h6>
                            Fall 2021
                        </h6>
                        <br></br>
                        <p className='description'>
                            Custom ray-tracing algorithm for dielectric, matte, and reflective surfaces.
                        </p>
                    </div>
                </div>)
            }
        </div>
    );
};