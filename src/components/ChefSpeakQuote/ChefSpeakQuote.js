import React from 'react';
import PropTypes from 'prop-types';
import './ChefSpeakQuote.css';

const ChefSpeakQuote = ({ id, quote }) => {
    return (
        <div className='chef-quote'>
            {quote}
        </div>
    )
}

export default ChefSpeakQuote;

ChefSpeakQuote.propTypes = {
    quote: PropTypes.string,
}