import React from 'react';
import PropTypes from 'prop-types';
import chefKiss from "./ChefYeezee.png"
import './KanyeQuote.css';

const KanyeQuote = ({ id, quote }) => {
    return (
        <div className='quote-container'>
            <div className='quote-box'>
                <div className='kanye-quote'>
                    {quote}
                </div>
            </div>
            <img className="chef-yeezy-pic" src={chefKiss} alt='' />
        </div>
    )
}

export default KanyeQuote;

KanyeQuote.propTypes = {
    quote: PropTypes.string,
}