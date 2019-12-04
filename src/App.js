import React, {useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CharList from './CharList'

// search for 2 characters and compare them on certain characteristics
// e.g. height, mass, birth year, number of vehicles piloted, number of films appeared in

export default function App() {

const [chars, setChars] = useState([])

const baseUrl = 'https://swapi.co/api/people';

useEffect(() => {
  axios.get(baseUrl)
  .then(res => {
    setChars(res.data.results.map(char => char))
    console.log('res results: ' + res.data.results)
    console.log('chars: ' + chars)
  })
  .catch(err => {
    console.error(err)
  })

}, [baseUrl])

console.log('chars2: ' + chars)

  return (
    <div className="App">
      tester names: 
      <CharList chars={chars} />
    </div>
  );
}

//TODO
// hide list of char names, keep it in background
// allow user to search for two names from list of char names
// on submitting names, put chars into box
// compare two chars on other key-value pairs e.g. who is taller
