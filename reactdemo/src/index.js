import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './routing/Main';


let products = [ 
  { name : 'iPhone 17 Pro', price : 110000},
  { name : 'Logitech Mouse', price : 11000},
  { name : 'Seagate 4TB External Harddisk', price : 20000}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
