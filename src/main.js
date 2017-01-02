import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './styles/ui.scss';
import './styles/index.scss';

import App from './components/App';
import Notfound from './components/Notfound404';

window.React = React; // handle React not defined error

ReactDOM.render(<Router history={hashHistory} >
        <Route path='/' component={App} />
        <Route path='list-days' component={App} >
            <Route path=':filter' component={App} />
        </Route>
        <Route path='add-day' component={App} />
        <Route path="*" component={Notfound} />
    </Router>, document.getElementById('app') );