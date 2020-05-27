import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home/home';
import { Navigation } from './components/nav/nav';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
      </div>
    );
  }
}