import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { CookiesProvider } from 'react-cookie';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import newsFetchReducer from './store/reducers/newsFetchReducer';
import authReducer from './store/reducers/authReducer';
import appModeReducer from './store/reducers/appModeReducer';


const history = createBrowserHistory();
ReactGA.initialize('UA-169198289-2');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
});


const rootReducer = combineReducers({
    newsFetchReducer: newsFetchReducer,
    auth: authReducer,
    appModeReducer: appModeReducer
});

export type RootState = ReturnType<typeof rootReducer>

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();