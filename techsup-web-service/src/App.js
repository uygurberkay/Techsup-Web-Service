import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      {/*BEM  (Come Alive)*/}
      <div className="App">
      {/* Header render imported above */}
      <Header />
      <Switch>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/'>
          {/* Home */}
          <Home />
        </Route>
        
      </Switch>
        
      </div>
    </Router>
      
      );
}

export default App;
