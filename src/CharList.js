import React, { useState } from 'react'
import CompareLuke from './CompareLuke'

export default function CharList({ chars, luke }) {

    const [selectedChar, setSelectedChar] = useState({}) 

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

    return (
        <div>
            <p>Ready!</p>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name'></input>
                <button type='submit'>Submit</button>
            </form>
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
