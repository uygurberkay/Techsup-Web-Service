import './App.css';
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  
useEffect(()=>{
  
  // Will only used when the app component loads..
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{},dispatch] = useStateValue();
  
  // Its like If statements in react.js
  auth.onAuthStateChanged(authUser =>{
    console.log('The USER is >>> ' , authUser);
    if(authUser){
      // User just logged in or was logged in shoot to the data layer 
      dispatch({
        type : 'SET_USER',
        user : authUser
      })
    }else{
      // User logged out
      dispatch({
        type : 'SET_USER',
        user : null
      })
    }
  })
  // Cheks the login situation
}, [])

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
