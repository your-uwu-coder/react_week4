import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Num = (props) => {
    const {id} = useParams()
    return (
        <div>
            <Link to={'/'}>Go To Home Page</Link>
            <h2>The number is... {id} </h2>
        </div>
    )
}

export default Num;