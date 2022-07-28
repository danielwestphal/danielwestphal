import "../styles/App.css"
import ArrowDownwards from '../images/arrow_downward.svg'
import React from "react"

export function CircleDown(props) {

    return (
        <div id="semi-circle" onClick={props.goTo}>
            <img id="arrowDown" src={ArrowDown} alt="Down Arrow"></img>
        </div>)
}

export function ArrowDown(props) {
    return (
            <img id="arrowDown" src={ArrowDownwards} alt="Down Arrow"></img>
    );
}