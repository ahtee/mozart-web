import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Nav';
import App from './App';
import Info from './Info';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Navigation />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Info />, document.getElementById('info'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
