import React from "react"
import "../styles/App.css"
import "../styles/NavBar.css"
import { Switch } from "@mui/material"
//import Resume from "../documents/resume.pdf"
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

export default function NavBar(props) {

    const setDark = () => {

        // 2
        localStorage.setItem("theme", "dark");

        // 3
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    // 4
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    const [checked, setChecked] = React.useState(prefersDark || localStorage.getItem("theme") === "dark");

    if (defaultDark) {
        setDark();
    }
    console.log(localStorage.getItem("theme"))

    // 5
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDark();
        } else {
            setLight();
        }
        setChecked(curr => !curr)
    };

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
            <div style={{ position: 'absolute', top: '2vh', right: '30vw', height: '10vh' }}>
                <FormControlLabel
                    control={<MaterialUISwitch sx={{ m: 1 }} />}
                    onChange={toggleTheme}
                    checked={checked}
                    defaultChecked={defaultDark}

                />
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