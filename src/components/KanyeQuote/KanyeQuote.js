import React from 'react';
import PropTypes from 'prop-types';
import './KanyeQuote.css';

const KanyeQuote = ({ id, quote }) => {
    return (
        <div className='kanye-quote'>
            {quote}
        </div>
    )
}

export default KanyeQuote;

KanyeQuote.propTypes = {
    quote: PropTypes.string,
}