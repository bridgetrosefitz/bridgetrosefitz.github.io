import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './fonts/Gambetta-Light.woff';
import './fonts/Gambetta-Light.woff2';
import './fonts/Gambetta-Bold.woff';
import './fonts/Gambetta-Bold.woff2';
import './i18n';

ReactDOM.render(

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
      </React.StrictMode>
    </BrowserRouter>, document.getElementById('root')

);