import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header.jsx'

function App() {

  return (
    <Router>
      <Header />    

      <Switch>
        <Route path="/"/>

      </Switch>
    </Router>

  );
}

export default App;
