import React from 'react';
import PropTypes from 'prop-types';
import './ChefSpeakQuote.css';

const ChefSpeakQuote = ({ id, quote }) => {
    return (
        <div className='translation-container'>
            <div className='translation-box'>
                <div className='chef-quote'>
                    {quote}
                </div>
            </div>
        </div>
    )
}

export default ChefSpeakQuote;

ChefSpeakQuote.propTypes = {
    quote: PropTypes.string,
}