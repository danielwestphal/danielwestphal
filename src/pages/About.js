import React from 'react'
import '../styles/App.css'
import '../styles/About.css'
import NavBar from "../components/NavBar"
import FootprintLeft from "../images/footprint_left.svg"
import FootprintRight from "../images/footprint_right.svg"

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
            </div>

        </div>

    );
};