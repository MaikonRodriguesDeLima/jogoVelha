import React from "react";
import ReactDom from 'react-dom';
import App from './App';

import './styles.css';

ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
), document.getElementById('root'));