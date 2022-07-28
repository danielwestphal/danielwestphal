import "../styles/App.css"
import ArrowUpwards from '../images/arrow_upward.svg'
import React from "react"

export default function ArrowUp(props) {
    return (
        <img className="arrow" src={ArrowUpwards} alt="Up Arrow"></img>
    );
}