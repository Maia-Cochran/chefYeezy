import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote'
import './KanyeQuoteForm.css';

//this component will eventually be a class component as a form that will then be rendered into the chef speak component
//or this will remain the same, but with the Chef speak component being a class??? hm. 

const KanyeQuoteForm = ({quotes}) => {
return ( 
    <div className='quote-list'>
        <KanyeQuote quote={quotes} id={quotes}/>
    </div>
    )
}
export default KanyeQuoteForm;