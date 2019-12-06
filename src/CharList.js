import React, { useState } from 'react'
import CompareLuke from './CompareLuke'

export default function CharList({ chars, luke }) {

    const [selectedChar, setSelectedChar] = useState({}) 
   // const [emptyChar, setEmptyChar]  = useState(null)

    //need to change for Hooks?
    async function handleSubmit(e) {
                e.preventDefault();
                setSelectedChar({});
                // console.log(e.target.elements[0].value)

                chars.find(char => {
                if (char.name.toLowerCase() === e.target.elements[0].value.toLowerCase()) {
                    // console.log('match!')
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
            {selectedChar.name ? <div><p>This character's name is {selectedChar.name}.</p>
            <p>They are {selectedChar.height}cm tall.</p></div> : 'No Character Selected'}
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
