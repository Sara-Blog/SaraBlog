import React from 'react';
import './index.css';
import Desktop5 from"./Components/Desktop5";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.requestFullscreen();
root.render(
  <React.StrictMode>
   < Desktop5/>
  </React.StrictMode>
);