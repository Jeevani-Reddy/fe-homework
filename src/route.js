import React from 'react';
import { Router,Route,browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';
import HomeContainer from './containers/HomeContainer';
import {fetchData} from './actions/actions';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

let routes= (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={HomeContainer}/>
        </Router>
    </Provider>
);

export default routes;