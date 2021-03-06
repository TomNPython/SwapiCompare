import React, {useState, useEffect} from 'react';

export default function CompareLuke({ selectedChar, luke }) {
    // convert height from string to number for comparisons
    const selectedHeight = parseInt(selectedChar.height, 10)
    const selectedWeight = parseInt(selectedChar.mass, 10)

    const [heightCompare, setHeightCompare] = useState()

    useEffect(() => {
        if (selectedHeight > luke.height) {
            setHeightCompare(<div>
                <span className='selectedChar'>{` ${selectedChar.name} `}</span> 
                is taller than <span className='luke'>{luke.name}</span>.
            </div>)
        } else if (selectedHeight < luke.height) {
            setHeightCompare(<div>
                <span className='luke'>{luke.name}</span> is taller than 
                <span className='selectedChar'>{` ${selectedChar.name}`}</span>.
            </div>)
        } else {
            setHeightCompare('They are the same height.')
        }
    }, [selectedChar, luke, selectedHeight]
    )
    
    return (
        <div>
            <h2>Compare Luke:</h2>
            {selectedChar.name ? <div>
                <p><span className='selectedChar'> {` ${selectedChar.name} `}</span> 
                 vs <span className='luke'>{luke.name}</span></p>
                {heightCompare}
                {selectedWeight === parseInt(luke.mass, 10) ? 
                    <div>They are the same weight.</div> 
                    :
                    <div> 
                    {selectedWeight > luke.mass ?
                        <div>
                            <span className='selectedChar'>{` ${selectedChar.name} `}</span> 
                            weighs more than <span className='luke'>{luke.name}</span>.
                        </div> : 
                        <div>
                            <span className='luke'>{luke.name}</span> weighs more than 
                            <span className='selectedChar'>{` ${selectedChar.name}`}</span>.
                        </div> }
                
                    </div>}
                {selectedChar.films.length === luke.films.length ? 
                    <div>They have appeared in the same number of movies.</div> 
                    :
                    <div> 
                    {selectedChar.films.length > luke.films.length ?
                        <div>
                            <span className='selectedChar'>{` ${selectedChar.name} `}</span> 
                            has appeared in more movies than <span className='luke'>{luke.name}</span>.
                        </div> : 
                        <div>
                            <span className='luke'>{luke.name}</span> has appeared in more movies than 
                            <span className='selectedChar'>{` ${selectedChar.name}`}</span>.
                        </div> }
                
                    </div>}
                {selectedChar.vehicles.length === luke.vehicles.length ? 
                    <div>They have piloted the same number of vehicles.</div> 
                    :
                    <div> 
                    {selectedChar.vehicles.length > luke.vehicles.length ?
                        <div>
                            <span className='selectedChar'>{` ${selectedChar.name} `}</span> 
                            has piloted more vehicles than <span className='luke'>{luke.name}</span>.
                        </div> : 
                        <div>
                            <span className='luke'>{luke.name}</span> has piloted more vehicles than 
                            <span className='selectedChar'>{` ${selectedChar.name}`}</span>.
                        </div> }
                
                    </div>}
             </div> : ''}
        </div>
    )
}

/* Use Effect alternate height finder/presenter
{selectedHeight === parseInt(luke.height, 10) ? 
                    <div>They are the same height.</div> 
                    :
                    <div> 
                    {selectedHeight > luke.height ?
                        <div>
                            <span className='selectedChar'>{` ${selectedChar.name} `}</span> 
                            is taller than <span className='luke'>{luke.name}</span>.
                        </div> : 
                        <div>
                            <span className='luke'>{luke.name}</span> is taller than 
                            <span className='selectedChar'>{` ${selectedChar.name}`}</span>.
                        </div> }
                
                    </div>}
*/