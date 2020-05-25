import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityCard from './components/activity-card/activity-card';
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