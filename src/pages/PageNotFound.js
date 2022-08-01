import React from 'react'
import '../styles/App.css'
import NavBar from "../components/NavBar"
import "../styles/PageNotFound.css"

export default function PageNotFound() {

    return (<div className='PageNotFound'>
        <NavBar />
        <h2 className='error'> Unfortunately, the page you are looking for does not exist or hasn't been created yet :(</h2>
    </div>)
}