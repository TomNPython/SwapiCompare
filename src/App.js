import React, {
  useEffect,
  useState
} from 'react';
import './App.css';
import axios from 'axios';
import CharList from './CharList';
import { ReactComponent as Icon } from './icons/Spin.svg';

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
        .catch(err => console.log(err)) // check this extra catch all works ok!!
    }
    getData()
  }, [baseUrl])



  return ( 
    <div>
      <p className='intro'>Have you ever wanted to know how a certain Star Wars character measured up to 
        Luke Skywalker?
      </p>
      <p className='intro'>Enter any character's name below to see their fact sheet and compare
        it to Luke.
      </p>
      <h2> Character Search: </h2> {
        loading ? <div><Icon /><div className='loading'>Loading Characters...</div></div> :
          <CharList chars={chars} luke={luke} /> }
   </div>
    );
  }
