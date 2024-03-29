import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Add this line in your main index.js or App.js file
import './App.css'; // Import your main component styles

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <div className=' ml-16 mr-16'>

   <App />
    </div> 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
