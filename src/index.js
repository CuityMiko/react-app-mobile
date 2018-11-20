import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import './styles/index.less'

import App from './containers/App.jsx'

import store from './redux/store'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <Provider store={store}>
            <App />
        </Provider>
    ), 
    document.getElementById('root'))

serviceWorker.register();