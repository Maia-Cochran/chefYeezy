import React from 'react';
import KanyeQuote from '../KanyeQuote/KanyeQuote';
import chefKiss from "/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/ChefYeezee.png"
// import triangle1 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles1.png'
// import triangle2 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles2.png'
// import triangle3 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles3.png'
import './KanyeQuoteForm.css';

const KanyeQuoteForm = ({quotes}) => {
return ( 
    <div className='quote-container'>
        <div className='quote-box'>
            <KanyeQuote 
            quote={quotes} 
            id={quotes} 
            key={quotes}
            />
        </div>
            <img src={chefKiss} alt=''/>
    </div>
    )
}
export default KanyeQuoteForm;