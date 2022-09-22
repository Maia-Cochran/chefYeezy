import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote'
import './KanyeQuoteForm.css';

const KanyeQuoteForm = ({quotes}) => {
    const viewQuote =
    quotes.map((quote, index) => {
        return (
            <KanyeQuote 
            quote={quote}
            key={index}
            />
            )
        })
        console.log(viewQuote)
return ( 
    <div className='quote-list'>
    `Hello, world!` 
    {viewQuote}
    </div>
    )
}
export default KanyeQuoteForm;