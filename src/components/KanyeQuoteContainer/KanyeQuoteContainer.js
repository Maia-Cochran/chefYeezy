import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote';
import chefKiss from "/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/ChefYeezee.png"
import './KanyeQuoteContainer.css';

const KanyeQuoteForm = ({ quotes }) => {

    return (
        <div className='quote-container'>
            <div className='quote-box'>
                <KanyeQuote
                    quote={quotes}
                    id={quotes}
                    key={quotes}
                />
            </div>
            <img className="chef-yeezy-pic" src={chefKiss} alt='' />
        </div>
    )
}
export default KanyeQuoteForm;