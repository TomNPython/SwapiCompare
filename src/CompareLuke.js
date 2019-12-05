import React from 'react'

export default function CompareLuke({ selectedChar, luke }) {
    const selectedHeight = parseInt(selectedChar.height, 10)
    return (
        <div>
            <h2>Compare Luke</h2>
            {selectedChar.name ? <div>
                <p>{selectedChar.name} : {selectedHeight}cm</p>
                <p>{luke.name} : {luke.height}cm</p>
                {selectedHeight > luke.height ?
                <div>
                    {selectedChar.name} is taller than {luke.name}.
                </div> : 
                <div>
                    {luke.name} is taller than {selectedChar.name}.
                </div>}
             </div> : ''}
        </div>
    )
}
