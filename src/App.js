import React, {useState} from 'react';
import './App.css';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx'

import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'

function App() {
  //Create a state of the sidebar. By default, this state is false
  const [isOpen, setIsOpen] = useState(false)

  // On the click, gonna change the state
  const toggle = () => {
    //Change the state of the openned
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Router>
        <Header toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/login/">
          </Route>
        </Switch>

      </Router>
    </div>
    
  );
}

export default App;
