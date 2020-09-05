import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import Trips from './views/Trips';
import AddTrip from './views/AddTrip';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/trips">
          <Trips />
        </Route>
        <Route path="/trips/add">
          <AddTrip />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App