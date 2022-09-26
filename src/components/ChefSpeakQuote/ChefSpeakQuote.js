import React from 'react';
import './ChefSpeakQuote.css';

const ChefSpeakQuote = ({id, quote}) => {
    return (
        <div className='chef-quote'>
            {quote}
        </div>
    )
}

export default ChefSpeakQuote;