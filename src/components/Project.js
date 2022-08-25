import React from 'react'
import '../styles/App.css'
import '../styles/Project.css'

export default function Project(props) {

    const book = (<svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

    const clock = (<svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 6V12L16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

    const info = (<svg className="icon fill_icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" />
    </svg>)

    const tool = (<svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6994 6.29974C14.5161 6.48666 14.4135 6.73798 14.4135 6.99974C14.4135 7.26149 14.5161 7.51281 14.6994 7.69974L16.2994 9.29974C16.4863 9.48296 16.7376 9.58559 16.9994 9.58559C17.2611 9.58559 17.5124 9.48296 17.6994 9.29974L21.4694 5.52974C21.9722 6.64092 22.1245 7.87897 21.9058 9.07888C21.6872 10.2788 21.1081 11.3836 20.2456 12.246C19.3832 13.1084 18.2784 13.6876 17.0785 13.9062C15.8786 14.1248 14.6406 13.9726 13.5294 13.4697L6.61937 20.3797C6.22154 20.7776 5.68198 21.0011 5.11937 21.0011C4.55676 21.0011 4.01719 20.7776 3.61937 20.3797C3.22154 19.9819 2.99805 19.4423 2.99805 18.8797C2.99805 18.3171 3.22154 17.7776 3.61937 17.3797L10.5294 10.4697C10.0265 9.35855 9.87428 8.1205 10.0929 6.92059C10.3115 5.72068 10.8907 4.61589 11.7531 3.75346C12.6155 2.89102 13.7203 2.3119 14.9202 2.09328C16.1201 1.87465 17.3582 2.0269 18.4694 2.52974L14.7094 6.28974L14.6994 6.29974Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

    const users = (<svg className="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>)

    let project = props.data;

    return (
        <a href={project.link} className="project">
            <div className='project'>
                <div className='imageproject'>
                    <img className='project' src={project.image} alt={project.title} />
                </div>
                <div className='tags'>
                    <p className='tag'>
                        {project.tags.join(', ')}
                    </p>
                </div>
                <div className='information'>
                    <h5 className='projTitle'>
                        {project.title}
                    </h5>
                    <div className='subinformation'>
                        <div className='no_space'>
                            {clock}
                            <h6 className='texti'>
                                {project.date}
                            </h6>
                        </div>

                        <div className='no_space'>
                            {users}
                            <h6 className='texti'>
                                {project.people}
                            </h6>
                        </div>

                        <div className='no_space'>
                            {book}
                            <h6 className='texti'>
                                {project.class}
                            </h6>
                        </div>

                        <div className='no_space'>
                            {tool}
                            <h6 className='texti'>
                                {project.tools}
                            </h6>
                        </div>

                        <div className='no_space'>
                            {info}
                            <p className='description'>
                                {project.description}
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </a>

    );
};