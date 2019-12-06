import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharList from './CharList'

// search for 2 characters and compare them on certain characteristics
// e.g. height, mass, birth year, number of vehicles piloted, number of films appeared in

export default function App() {

const [chars, setChars] = useState([])
const [luke, setLuke] = useState({})
const [loading, setLoading] = useState(true)

const baseUrl = 'https://swapi.co/api/people';

useEffect(() => {
  setLoading(true)
  axios.get(baseUrl)
  .then(res => {
    setLoading(false)
    setChars(res.data.results.map(char => char))
    setLuke(res.data.results[0])
    // console.log('luke: ' + luke.name)
    // console.log('res results: ' + res.data.results)
    // console.log('chars: ' + chars)
  })
  .catch(err => {
    console.log(err)
  })

}, [baseUrl])

// console.log('chars2: ' + chars)
// console.log('luke after: ' + luke)
// console.log('luke name: ' + luke.name)


  return (
    <div className="App">
      <h2>Character Name:</h2>
      {loading ? 'Loading Characters...' :
<CharList chars={chars} luke={luke} /> }
    </div>
  );
}

//TODO
// hide list of char names, keep it in background
// allow user to search for two names from list of char names
// on submitting names, put chars into box
// compare two chars on other key-value pairs e.g. who is taller
