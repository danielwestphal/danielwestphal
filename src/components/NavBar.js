import React from "react"
import "../styles/App.css"
import "../styles/NavBar.css"
//import Resume from "../documents/resume.pdf"

export default function NavBar(props) {
    let headers = [{
        link: "/",
        name: "Home"
    },
    {
        link: "/about",
        name: "About"
    },
    {
        link: "/portfolio",
        name: "Portfolio"
    }]
    return (
        <div>
            <div className="name">
                <svg className="logo" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_126_257)">
                        <path d="M5.94409 5.92222H8.47187C10.4065 5.92222 11.3738 7.05803 11.3738 9.32966C11.3738 10.206 11.2659 10.9137 11.0502 11.453C10.8345 11.9855 10.4941 12.3765 10.029 12.6259C9.57061 12.8753 8.96058 13 8.19887 13H5.94409V5.92222ZM8.35054 11.8372C8.73476 11.8372 9.04147 11.753 9.27065 11.5844C9.49984 11.4159 9.66498 11.1497 9.7661 10.7857C9.87395 10.4217 9.92787 9.93633 9.92787 9.32966C9.92787 8.52751 9.81328 7.95455 9.5841 7.61077C9.35491 7.26025 8.97406 7.08499 8.44154 7.08499H7.40009V11.8372H8.35054Z" />
                        <path d="M17.6659 10.7513L16.1795 17.8291H14.7943L13.5001 12.5612L12.2058 17.8291H10.8206L9.33429 10.7513H10.8813L11.6497 15.4328L12.8125 10.7513H14.1876L15.3504 15.4328L16.1189 10.7513H17.6659Z" />

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

                <a href="/">Daniel Westphal</a>
            </div>
            <div className="links">
                {headers.map(header => {
                    let select = "null";
                    if (header.name === props.selected) {
                        select = "selected"
                    }

                    return <a href={header.link} className={select} > {header.name} </a>
                })}
                <a href="/resume" onClick={(e) => {/* window.open(Resume, "_blank") */ }}>Resume</a>
            </div>
        </div>)
}