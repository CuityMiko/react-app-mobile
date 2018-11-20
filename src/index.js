// import React from 'react';
// import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'

// import './styles/index.less'

// import App from './containers/App.jsx'

// import store from './redux/store'

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     ), 
//     document.getElementById('root'))

// serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducers';
import { AppContainer } from 'react-hot-loader';
import Page from './routes/index';
// import './style/lib/animate.css';
// import './style/antd/index.less';
import './styles/index.less';

// redux 注入操作
const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

// 增加react-hot-loader保持状态刷新操作
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component store={store} />
            </Provider>
        </AppContainer>
        ,
        document.getElementById('root')
    );
};

render(Page);

// Webpack Hot Module Replacement API
if (module.hot) {
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
        if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args);
        }
    };
    module.hot.accept('./routes/index', () => {
        render(Page);
    })
}

serviceWorker.register();