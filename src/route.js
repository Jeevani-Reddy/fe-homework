import React from 'react';
import { Router,Route,browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/configureStore';
import HomeContainer from './containers/HomeContainer';
import EditUserContainer from './containers/EditUserContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import LogoutContainer from './containers/LogoutContainer'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

let routes= (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={HomeContainer}/>
            <Route path='/edit/:userId' component={EditUserContainer}/>
            <Route path='/edit' component={EditUserContainer}/>
            <Route path='/create' component={CreateUserContainer}/>
            <Route path='/logout' component={LogoutContainer}/>
        </Router>
    </Provider>
);

export default routes;
