import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote'
import './KanyeQuoteForm.css';

const KanyeQuoteForm = ({quotes}) => {
    const viewQuote = 
    Object.values(quotes).map((quote, index)=> {
        return (
            <KanyeQuote 
            quote={quote.quote}
            key={index}
            />
        )
    })
return ( 
    <div className='quote-list'>
        {viewQuote}
    </div>
    )
}
export default KanyeQuoteForm;