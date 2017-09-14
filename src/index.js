import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.scss';
import './style/common.scss';
import './style/fn.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
