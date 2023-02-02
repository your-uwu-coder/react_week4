import React, {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'

const AboutMe = (props) => {
    return (
        <div>
        <Link to={'/'}>Go To Home Page</Link>
        <h2>About Me</h2>
        </div>
    )
}

export default AboutMe;