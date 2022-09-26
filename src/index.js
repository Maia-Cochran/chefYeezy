import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

const FontLink = () => {
  return(
      <div className="card">
          <span className="font-link">
              This is with Font Link. We are linking the fonts from the Google Fonts.
          </span>
      </div>
  )
};

export default FontLink;


reportWebVitals();