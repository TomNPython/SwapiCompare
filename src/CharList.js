import React from 'react'

export default function CharList({ chars }) {
    return (
        <div>
            {chars.map(char => (
                <div key={char.name}>
                    Name: {char.name} 
                    <br/>
                    Height: {char.height}
                </div>
            ))}
        </div>
    )
}
