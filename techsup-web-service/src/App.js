import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Switch , withRouter} from 'react-router-dom';

function App() {

return (
      <Router>
        {/*BEM  (Come Alive)*/}
        <div className="App">
          <Switch>

            <Route path="/login">
              {/* Login */}
              <Login />
            </Route>

            <Route path="/checkout">
              {/* Header render imported above */}
              <Header />
              {/* Checkout */}
              <Checkout />
            </Route>

            <Route exact path="/">
              {/* Header render imported above */}
              <Header />
              {/* Home */}
              <Home />
            </Route>
          
          </Switch>
        </div>
      </Router>
    );
}

export default App;
