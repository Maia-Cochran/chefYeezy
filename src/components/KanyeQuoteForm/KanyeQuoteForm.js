import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote'
import './KanyeQuoteForm.css';

const KanyeQuoteForm = ({quotes}) => {
    const viewQuote = 
    quotes.map((quote, index)=> {
        return (
            <KanyeQuote 
            quote={quote.quote}
            key={index}
            />
        )
    })
    // console.log(viewQuote)
    //     return (
    //        
    //         )
    //     })
        // console.log(viewQuote)
return ( 
    <div className='quote-list'>
    {/* `Hello, world!`  */}
    {/* {quotes} */}
    {viewQuote}
    {/* <KanyeQuote quotes={quotes}/> */}
    </div>
    )
}
export default KanyeQuoteForm;