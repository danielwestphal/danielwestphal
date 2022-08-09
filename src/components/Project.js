import React from 'react'
import '../styles/App.css'
import '../styles/Project.css'

export default function Project(props) {
    const [info, setInfo] = React.useState(false);

    let project = props.data;

    return (
        <a href={project.link}>
            <div className="project" onMouseEnter={() => setInfo(true)} onMouseLeave={() => setInfo(false)}>
                <img className={info ? "project blur" : "project"} src={project.image} alt="project!" />
                {info &&
                    (<div className='info'>
                        <div className='sticky'>

                        </div>
                        <div className='information'>
                            <h5 className='projTitle'>
                                {project.title}
                            </h5>
                            <h6>
                                {project.date}
                            </h6>
                            <p className='description'>
                                {project.description}
                            </p>
                        </div>
                    </div>)
                }
            </div>
        </a>

    );
};