import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  //Store our data
  const [pokedex, setPokedex] = useState([])

  //useEffect hook to grab data from API library
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result) => {
        console.log(result.data)
        setPokedex(result.data.results)
    })
    .catch((error) => {
        console.log(error)
    })
}, [])

  return (
    <>
    <div className="App">
      <ul>
      {
        pokedex.map((pokemon) => (
        <li><h2>{pokemon.name}</h2></li>
        )) 
      }
      </ul>
    </div>
    </>
  );
}

export default App;
