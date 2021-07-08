import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
// import 'tailwindcss/dist/'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
