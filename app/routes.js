import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/home';
import AddCharacter from './components/AddCharacter';
import about from './components/about';
import blog from './components/blog';
import FAQ from './components/FAQ';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/add' component={AddCharacter} />
    <Route path='/about' component={about} />
    <Route path='/blog' component={blog} />
    <Route path='/FAQ' component={FAQ} />
  </Route>
);
