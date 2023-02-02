import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Word = (props) => {
    const {word, color1, color2} = useParams()

    return (
        <div>
            <Link to={'/'}>Go To Home Page</Link>
            <h2 style={{background:color1, color:color2}}>The word is .. {word} </h2>
        </div>
    )
}

export default Word;