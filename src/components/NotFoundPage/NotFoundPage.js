import React from 'react';
import Status from '../Status/Status';
import './NotFoundPage.css';

const NotFound = () => {
    return (
      <Status code={404}>
        <div className='error-wrapper'>
          <h1>Whoopsie!</h1>
          <h1>Looks like you've veered off the path, my friend!</h1>
          <h2>Error: 404</h2>
        </div>
      </Status>
    );
  };

export default NotFound;