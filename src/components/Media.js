import React from "react";
import Typewriter from "react-ts-typewriter";

export default function Media () {
    return (
        <div style={{backgroundColor : "blue"}}>
            <h1> Get to know me more through <Typewriter text={["photos", "books", "movies", "people"]} loop={true} delay={1000} random={100} speed={150}/></h1>
        </div>
    )
}