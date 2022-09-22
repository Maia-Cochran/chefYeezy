import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote'
import './KanyeQuoteForm.css';

//this component will eventually be a class component as a form that will then be rendered into the chef speak component
//or this will remain the same, but with the Chef speak component being a class??? hm. 

const KanyeQuoteForm = ({quotes}) => {
    const viewQuote = 
    Object.values(quotes).map((quote, index)=> {
        return (
            <KanyeQuote 
            id={index}
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