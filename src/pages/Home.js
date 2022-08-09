import "../styles/App.css"
import "../styles/Home.css"
import "../styles/Circles.css"
import Arrow from '../images/arrow.svg'
import React from "react"
import NavBar from "../components/NavBar"


export default function Home(props) {

    return (

        <div className="Home">
            <div>
                <ul className="circles">
                    {new Array(10).fill(<li></li>)}
                </ul>
            </div>

            <NavBar selected="Home" />
            <div id="ResumeArrow">
                <h4 style={{paddingTop: '30%', float: 'left'}}>check out my resume</h4>
                <img src={Arrow} style={{float: 'left', height: 'auto', width: '6vw'}} alt="arrow pointing to resume" />
            </div>

            <div className="about">
                <h1 id="name">Hi, I'm <em className="accent">Daniel</em></h1>
                <h2 id="title">Software Engineer & Designer </h2>
                <p id="bio">
                    I'm interested designing software that will make an impact.
                    <br />
                    <br />
                    Currently looking for <b>full time software engineering positions for 2023!</b>
                    <br />
                    <br />
                    Contact Me:

                </p>

                <div >
                    <div >

                        <a style={{ zIndex: 1, width: '10vw' }} href="https://github.com/danielwestphal" target="_blank" rel="noopener noreferrer">
                            <svg className="contacts" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_126_257)">

                                    <path d="M28 38.5V31.7275C28.0656 30.893 27.9529 30.0542 27.6693 29.2666C27.3856 28.4791 26.9376 27.761 26.355 27.16C31.85 26.5475 37.625 24.465 37.625 14.91C37.6246 12.4667 36.6847 10.1171 35 8.3475C35.7977 6.20988 35.7413 3.84711 34.8425 1.75C34.8425 1.75 32.7775 1.1375 28 4.34C23.989 3.25294 19.761 3.25294 15.75 4.34C10.9725 1.1375 8.9075 1.75 8.9075 1.75C8.00866 3.84711 7.95225 6.20988 8.75 8.3475C7.05272 10.1302 6.11191 12.5011 6.125 14.9625C6.125 24.4475 11.9 26.53 17.395 27.2125C16.8192 27.8074 16.3752 28.517 16.0918 29.2949C15.8084 30.0728 15.6919 30.9016 15.75 31.7275V38.5M15.75 33.25C7 35.875 7 28.875 3.5 28L15.75 33.25Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_126_257" x="0.5" y="0.499756" width="55" height="138.998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_126_257" />
                                    </filter>

                                </defs>
                            </svg>

                            @danielwestphal
                        </a>
                    </div>
                    <br />
                    <div>
                        <a style={{ zIndex: 1, width: '10vw' }} href="https://www.linkedin.com/in/danielwestphal" target="_blank" rel="noopener noreferrer">
                            <svg className="contacts" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_126_257)">

                                    <path d="M28 14C30.7848 14 33.4555 15.1062 35.4246 17.0754C37.3938 19.0445 38.5 21.7152 38.5 24.5V36.75H31.5V24.5C31.5 23.5717 31.1313 22.6815 30.4749 22.0251C29.8185 21.3687 28.9283 21 28 21C27.0717 21 26.1815 21.3687 25.5251 22.0251C24.8687 22.6815 24.5 23.5717 24.5 24.5V36.75H17.5V24.5C17.5 21.7152 18.6062 19.0445 20.5754 17.0754C22.5445 15.1062 25.2152 14 28 14V14Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.5 15.75H3.5V36.75H10.5V15.75Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />

                                </g>
                                <defs>
                                    <filter id="filter0_i_126_257" x="0.5" y="0.499756" width="55" height="138.998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_126_257" />
                                    </filter>
                                </defs>
                            </svg>

                            Daniel Westphal
                        </a>
                    </div>
                    <br />
                    <div>
                        <a style={{ zIndex: 1, width: '10vw' }} href="mailto:dew.23@dartmouth.edu" target="_top">
                            <svg className="contacts" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_126_257)">
                                    <path d="M7 7H35C36.925 7 38.5 8.575 38.5 10.5V31.5C38.5 33.425 36.925 35 35 35H7C5.075 35 3.5 33.425 3.5 31.5V10.5C3.5 8.575 5.075 7 7 7Z" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M38.5 10.5L21 22.75L3.5 10.5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <filter id="filter0_i_126_257" x="0.5" y="0.499756" width="55" height="138.998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_126_257" />
                                    </filter>
                                </defs>
                            </svg>

                            dew.23@dartmouth.edu
                        </a>
                    </div>

                </div>
            </div>

            


        </div>
    );
}