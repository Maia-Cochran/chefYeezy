import React from 'react';
import './ChefSpeakQuote.css';

const ChefSpeakQuote = ({id, quote}) => {
    return (
        <div className='chef-quote'>
            <p>{quote}</p>
            {/* <button className='favorite-button' /> */}
        </div>
    )
}

export default ChefSpeakQuote;