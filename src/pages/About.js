import React from 'react'
import '../styles/App.css'
import '../styles/About.css'
import NavBar from "../components/NavBar"
import FootprintLeft from "../images/footprint_left.svg"
import FootprintRight from "../images/footprint_right.svg"
import { info } from '../data/about'

export default function About(props) {
    return (
        <div>
            <div className="About">
                <NavBar selected="About" />
                <h1 className='title'> My <em> life</em> at a glance</h1>
                <div className='footprints'>
                    <img id="rf0" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf0" className='footprints' src={FootprintLeft} alt="right footprint" />
                    <img id="rf1" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf1" className='footprints' src={FootprintLeft} alt="right footprint" />
                    <img id="rf2" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf2" className='footprints' src={FootprintLeft} alt="right footprint" />
                    <img id="rf3" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf3" className='footprints' src={FootprintLeft} alt="right footprint" />
                    <img id="rf4" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf4" className='footprints' src={FootprintLeft} alt="right footprint" />
                    <img id="rf5" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf5" className='footprints' src={FootprintLeft} alt="right footpring" />
                    <img id="rf6" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf6" className='footprints' src={FootprintLeft} alt="right footpring" />
                    <img id="rf7" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf7" className='footprints' src={FootprintLeft} alt="right footpring" />
                    <img id="rf8" className='footprints' src={FootprintRight} alt="left footprint" />
                    <img id="lf8" className='footprints' src={FootprintLeft} alt="right footpring" />
                    <img id="rf9" className='footprints' src={FootprintRight} alt="left footprint" />
                </div>

                <div className='family aboutme'>
                    <svg className='fill center' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.7493 54.1663C63.7493 54.1663 55.9577 55.583 49.9993 58.333C44.041 55.5413 36.2493 54.1663 31.2493 54.1663C22.2077 54.1663 4.16602 58.6663 4.16602 67.708V79.1663H95.8327V67.708C95.8327 58.6663 77.791 54.1663 68.7493 54.1663ZM52.0827 72.9163H10.416V67.708C10.416 65.458 21.0827 60.4163 31.2493 60.4163C41.416 60.4163 52.0827 65.458 52.0827 67.708V72.9163ZM89.5827 72.9163H58.3327V67.708C58.3327 65.7913 57.4993 64.1247 56.166 62.6247C59.8327 61.3747 64.3327 60.4163 68.7493 60.4163C78.916 60.4163 89.5827 65.458 89.5827 67.708V72.9163ZM31.2493 49.9997C39.291 49.9997 45.8327 43.458 45.8327 35.4163C45.8327 27.3747 39.291 20.833 31.2493 20.833C23.2077 20.833 16.666 27.3747 16.666 35.4163C16.666 43.458 23.2077 49.9997 31.2493 49.9997ZM31.2493 27.083C35.8327 27.083 39.5827 30.833 39.5827 35.4163C39.5827 39.9997 35.8327 43.7497 31.2493 43.7497C26.666 43.7497 22.916 39.9997 22.916 35.4163C22.916 30.833 26.666 27.083 31.2493 27.083ZM68.7493 49.9997C76.791 49.9997 83.3327 43.458 83.3327 35.4163C83.3327 27.3747 76.791 20.833 68.7493 20.833C60.7077 20.833 54.166 27.3747 54.166 35.4163C54.166 43.458 60.7077 49.9997 68.7493 49.9997ZM68.7493 27.083C73.3327 27.083 77.0827 30.833 77.0827 35.4163C77.0827 39.9997 73.3327 43.7497 68.7493 43.7497C64.166 43.7497 60.416 39.9997 60.416 35.4163C60.416 30.833 64.166 27.083 68.7493 27.083Z" />
                    </svg>

                    <p className='about'>
                        {info.family}
                    </p>

                </div>

                <div className='education aboutme'>
                    <svg className='fill center' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8327 54.9167V71.5833L49.9993 87.5L79.166 71.5833V54.9167L49.9993 70.8333L20.8327 54.9167ZM49.9993 12.5L4.16602 37.5L49.9993 62.5L87.4993 42.0417V70.8333H95.8327V37.5L49.9993 12.5Z" />
                    </svg>

                    <p className='about'>
                        {info.education}
                    </p>

                </div>

                <div className='work aboutme'>
                    <svg className='stroke center' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.334 29.167H16.6673C12.0649 29.167 8.33398 32.898 8.33398 37.5003V79.167C8.33398 83.7694 12.0649 87.5003 16.6673 87.5003H83.334C87.9364 87.5003 91.6673 83.7694 91.6673 79.167V37.5003C91.6673 32.898 87.9364 29.167 83.334 29.167Z" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M66.6673 87.5V20.8333C66.6673 18.6232 65.7893 16.5036 64.2265 14.9408C62.6637 13.378 60.5441 12.5 58.334 12.5H41.6673C39.4572 12.5 37.3376 13.378 35.7748 14.9408C34.212 16.5036 33.334 18.6232 33.334 20.8333V87.5" stroke-width="8.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='about'>
                        {info.work}
                    </p>
                </div>

                <div className='fun aboutme'>
                    <svg className='fill center' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.334 50.0003C83.334 45.417 87.084 41.667 91.6673 41.667V25.0003C91.6673 20.417 87.9173 16.667 83.334 16.667H16.6673C12.084 16.667 8.37565 20.417 8.37565 25.0003V41.667C12.959 41.667 16.6673 45.417 16.6673 50.0003C16.6673 54.5837 12.959 58.3337 8.33398 58.3337V75.0003C8.33398 79.5837 12.084 83.3337 16.6673 83.3337H83.334C87.9173 83.3337 91.6673 79.5837 91.6673 75.0003V58.3337C87.084 58.3337 83.334 54.5837 83.334 50.0003ZM64.9173 70.0003L50.0006 60.417L35.084 70.0003L39.584 52.8337L25.8757 41.6253L43.5423 40.5837L50.0006 24.167L56.4173 40.6253L74.084 41.667L60.3756 52.8753L64.9173 70.0003Z" />
                    </svg>
                    <p className='about'>
                        {info.fun}
                    </p>
                </div>
            </div>

        </div>

    );
};