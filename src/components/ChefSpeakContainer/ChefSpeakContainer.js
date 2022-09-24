import React from 'react';
import ChefSpeakQuote from '../ChefSpeakQuote/ChefSpeakQuote'
import './ChefSpeakContainer.css';
import triangle1 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles1.png'
import triangle2 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles2.png'
import triangle3 from '/Users/maiacochran/turing/3module/showcase/chef-yeezy/src/images/triangles3.png'
//this component will eventually be a class component as a form that will then be rendered into the chef speak component
//or this will remain the same, but with the Chef speak component being a class??? hm. 

const ChefSpeakContainer = ({quotes}) => {
    // console.log('CHEFS QUOTE:', quotes.contents.translated)
    
return ( 
    <div className='translation-container'>
            {/* <div className='triangles1'>
                <img className="triangle1" src={triangle1} />
                <img className="triangle2" src={triangle2} />
            </div> */}
        <div className='translation-box'>
            <ChefSpeakQuote quote={quotes} id={quotes}/>
        </div>
        {/* {!quotes ? <p> loading... </p> : }  */}
        <p><button className='save-button'>Save-uh Zees Kwoot-ah!</button></p>
        <p><button className='favorites-button'>See My Faves!</button></p>
        {/* <div className='triangles1'>
                <img className="triangle1" src={triangle1} />
                <img className="triangle2" src={triangle2} />
        </div> */}
    </div>
    )
}
export default ChefSpeakContainer;