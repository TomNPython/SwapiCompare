import React from 'react';

export default function CompareLuke({ selectedChar, luke }) {
    // convert height from string to number for comparisons
    const selectedHeight = parseInt(selectedChar.height, 10)
    return (
        <div>
            <h2>Compare Luke:</h2>
            {selectedChar.name ? <div>
                <p>{selectedChar.name} - {selectedHeight}cm</p>
                <p>{luke.name} - {luke.height}cm</p>
                {selectedHeight == luke.height ? 
                    <div>They are the same height.</div> 
                    :
                    <div> 
                    {selectedHeight > luke.height ?
                        <div>
                            {selectedChar.name} is taller than {luke.name}.
                        </div> : 
                        <div>
                            {luke.name} is taller than {selectedChar.name}.
                        </div> }
                    </div>}
             </div> : ''}
        </div>
    )
}
