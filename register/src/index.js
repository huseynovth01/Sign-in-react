import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './components/register1/register1';

ReactDOM.render(
  <React.StrictMode>
    <Register />
    <helpers />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
