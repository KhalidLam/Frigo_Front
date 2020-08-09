import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth-function/Auth';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css';
import Test from './Components/Test';

import {
  ThemeProvider,
  theme,
  CSSReset,
  usePopoverContext,
} from "@chakra-ui/core";
// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/mdb-free.css';
// import "./assets/scss/mdb-free.scss"
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >

    <CSSReset />
    <App />
      {/* <Test/> */}
    {/* <Auth/> */}
    </ThemeProvider >
  </React.StrictMode>,
  document.getElementById('root')
);


