import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './../imports/ui/App';
import Home from './../imports/ui/Home';
import Blog from './../imports/ui/Blog';
import Dashboard from './../imports/ui/Dashboard';
import Login from './../imports/ui/Login';

const routes = (

    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/bmd-admin" component={Login}/>
      </div>
    </Router>
)

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(routes, document.getElementById('app'));
  })
});
