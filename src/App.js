import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import axios from 'axios';
import CharList from './CharList'
import { ReactComponent as Icon } from './icons/Spin.svg';

// search for 2 characters and compare them on certain characteristics
// e.g. height, mass, birth year, number of vehicles piloted, number of films appeared in

export default function App() {

  const [chars, setChars] = useState([])
  const [luke, setLuke] = useState({})
  const [loading, setLoading] = useState(true)

  let baseUrl = 'https://swapi.co/api/people';

  useEffect(() => {
    axios.get(baseUrl)
      .then(res => {
        setLuke(res.data.results[0])
      })
      .catch(err => console.log(err))

    async function getData() {
      await axios.get(baseUrl)
        .then(res => {
          setChars(chars => chars.concat(res.data.results.map(char => char)))
          if (res.data.next != null) {
            baseUrl = res.data.next
            getData()
          } else {
            setLoading(false)
          }
        })
    }
    getData()
  }, [baseUrl])



  return ( 
    <div className = "App" >
      <h2> Character Name: </h2> {
        loading ? <div><Icon />Loading Characters...</div> :
          <CharList chars={chars} luke={luke} /> }
   </div>
    );
  }

  //TODO
  // hide list of char names, keep it in background
  // allow user to search for two names from list of char names
  // on submitting names, put chars into box
  // compare two chars on other key-value pairs e.g. who is taller