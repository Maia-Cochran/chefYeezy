import React from 'react';
import './KanyeQuote.css';

const KanyeQuote = ({id, quote}) => {
    return (
        <div className='kanye-quote'>
            {quote}
        </div>
    )
}

export default KanyeQuote;