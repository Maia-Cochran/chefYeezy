import React from 'react';
import ChefSpeakQuote from '../ChefSpeakQuote/ChefSpeakQuote'
import './ChefSpeakContainer.css';

const ChefSpeakContainer = ({quotes}) => { 
return ( 
    <div className='translation-container'>
        <div className='translation-box'>
            <ChefSpeakQuote 
            quote={quotes} 
            id={quotes}
            key={quotes}
            />
        </div>
    </div>
    )
}
export default ChefSpeakContainer;