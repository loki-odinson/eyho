import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path = '/' component = {HomePage} />
    </Switch>
  </div>
);

export default App;
