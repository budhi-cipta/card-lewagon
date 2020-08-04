import React from 'react';
import {BrowserRouter as Router,
Switch,
Route}
from 'react-router-dom'

import Home from './Home'

import './App.css';


const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  )
}



export default App;
