import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Demo name='Mayank kaushik' work="Web Developer"/>
    <Demo name='Rohit Shakya'   work="Web Designer"/>
    <Demo name='Madhuri Sharma' work="Business Development Executive"/>
    <Demo name='Vinod Sharma'   work="Manager"/>
    <Demo name='Navul Verma'    work="Backend Developer"/>
    <Demo name='Geetika Tayal'  work="Marketing Head"/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
