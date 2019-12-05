import React, { useState } from 'react'
import CompareLuke from './CompareLuke'

export default function CharList({ chars, luke }) {

    const [selectedChar, setSelectedChar] = useState([]) 

    function handleSubmit(e) {
        e.preventDefault()
        console.log('hello')
        console.log(e.target)
        console.log(e.target.elements[0].value)
        chars.forEach(char => {
            if (char.name == e.target.elements[0].value) {
                console.log('match!')
                showCharDetails(char)
            }
        })
    }

    function showCharDetails(c) { // can be got rid of and put into above func? check first!
        console.log('C is ' + c)
        setSelectedChar(c)
        console.log(selectedChar)
    }

    return (
        //show list of all characters, not needed in final version
        <div>
            {chars.map(char => (
                <div key={char.name}>
                    Name: {char.name} 
                    <br/>
                    Height: {char.height}
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='name'></input>
                <button type='submit'>Submit</button>
            </form>           
{selectedChar.name ? <div><p>This character's name is {selectedChar.name}.</p>
            <p>They are {selectedChar.height}cm tall.</p></div> : '' }
            <CompareLuke selectedChar={selectedChar} luke={luke} />
        </div>
    )
}
