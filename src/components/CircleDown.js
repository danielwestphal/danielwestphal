import "../styles/App.css"
import ArrowDown from '../images/arrow_downward.svg'
import React from "react"

export default function CircleDown(props) {

    return (
        <div id="semi-circle" onClick={props.goTo}>
            <img id="arrowDown" src={ArrowDown} alt="Down Arrow"></img>
        </div>)
}