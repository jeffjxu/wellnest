import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/nav/nav';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}