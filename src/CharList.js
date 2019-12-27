import React, { useState} from 'react'
import CompareLuke from './CompareLuke'

export default function CharList({ chars, luke }) {

    const [selectedChar, setSelectedChar] = useState({})
    const [searchedChars, setSearchedChars] = useState([]) 

    //need to change for Hooks?
    function handleSubmit(e) {
                e.preventDefault();
                setSelectedChar({});

                chars.find(char => {
                if (char.name.toLowerCase() === e.target.elements[0].value.toLowerCase()) {
                    setSelectedChar(char)
                }
            }
        );}

    function findMatches(charToMatch, charList) {
        return charList.filter(char => {
            const regex = new RegExp(charToMatch, 'gi');
            return char.name.match(regex)
        })
    }

    function handleChange(e) {
        const matchArray = findMatches(e.target.value, chars)
        setSearchedChars(matchArray.map(char => char.name))
    }

    function handleClick(e) {
        e.preventDefault()
        setSelectedChar((chars.filter(char => char.name === e.currentTarget.dataset.name))[0])
    }


    return (
        <div>
            <p>Ready!</p>
            <form onSubmit={handleSubmit} >
                <input onChange={handleChange} type='text' placeholder='Name'></input>
                <button type='submit'>Submit</button>
            </form>
            {searchedChars.length ? 
            <div className='searched-box'>Looking for one of these? 
                <ul>
                    {searchedChars.map(char => 
                    <li key={char} data-name={char} onClick={handleClick}>
                        {char}
                    </li>)}
                </ul>
            </div>
             : ''}
            <h2>Character Sheet:</h2>           
            {selectedChar.name ? <div>
                    <p>This character's name is 
                        <span className='selectedChar'>{` ${selectedChar.name}`}</span>.</p>
                    <p>They are <span className='selectedChar'>{` ${selectedChar.height}cm `}</span> tall.</p>
                    <p>They are <span className='selectedChar'>{` ${selectedChar.mass}kg`}</span>.</p>
                    <p>They have appeared in 
                        <span className='selectedChar'>{` ${selectedChar.films.length} `}</span>  movies.</p>
                    <p>They have piloted
                         <span className='selectedChar'>{` ${selectedChar.vehicles.length} `}</span>  vehicles.</p>
                </div> : 'No Known Character Selected'}
            <CompareLuke selectedChar={selectedChar} luke={luke} />
        </div>
    )
}

/*
for mapping list of characters to page
{chars.map(char => (
    <div key={char.name}>
        Name: {char.name} 
        <br/>
        Height: {char.height}
    </div>
))}
*/
