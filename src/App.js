import React, {useState} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Menu from './components/Menu/Menu.jsx';
import HeaderBlock from './components/HeaderBlock/HeaderBlock.jsx';
import Login from './components/Login/Login';

function App() {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Header isOpen={isOpen} setIsOpen={setIsOpen} /> 
            {isOpen && <Menu/> }
            <HeaderBlock />
          </Route>
        <Route exact path="/login">
          <Login />
        </Route>


      </Switch>
    </Router>

  );
}

export default App;
