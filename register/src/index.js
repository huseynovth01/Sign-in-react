import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register1 from './components/register1/register1';
import Register2 from './components/register2/register2';

ReactDOM.render(
  <React.StrictMode>
    <Register1 />
    <Register2 />
    <helpers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
