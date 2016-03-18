import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/home';
import AddCharacter from './components/AddCharacter';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={AddCharacter} />
  </Route>
);
