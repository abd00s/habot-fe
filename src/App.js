import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Index from './components/index.component';
import Create from './components/create.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Habot
            </p>
            <ul>
              <li>
                <Link to={'/index'}>Index</Link>
              </li>
              <li>
                <Link to={'/create'}>Create</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path = '/create' component = { Create } />
            <Route path       = '/index' component  = { Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
