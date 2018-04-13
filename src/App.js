import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Gene from './Gene'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/gene/:name' component={Gene} />
        </Switch>
      </div>
    );
  }
}

export default App;
