import React from 'react'
import './styles/App.css'
import './styles/Portfolio.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export function Portfolio(props) {
    return (
        <div className="Portfolio">
            <h1 className='dark'> My Portfolio</h1>
            <div className='projects'>
                <AutoplaySlider play={true}
                organicArrows = {true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={6000}
                    >
                <div style={{backgroundColor: "#FFFFFF"}}>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AutoplaySlider>
            </div>
        </div>
        
    );
};