import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Site from './OurSite';
import Staff from './OurStaff';
import Service from './Service';
import List from '../Component/List';
import Carousel from '../Component/Carousel';

export default () => (
  <Router>
    <>
      <List />
      <Switch>
        <Route path='/' component={Carousel} exact />
        <Route path='/Site' component={Site} exact />
        <Route path='/Staff' component={Staff} exact />
        <Route path='/Service' component={Service} exact />
        <Redirect from='*' to='/' />
      </Switch>
    </>
  </Router>
);
