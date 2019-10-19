import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {  BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";

import Main from './containers/main/index'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
