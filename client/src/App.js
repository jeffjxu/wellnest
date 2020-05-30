import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home/home';
import { ActivityDetail } from './components/activity-detail/activity-detail';
import { MailingListForm } from './components/mailing-list/mailing-list';
import { Route, Switch } from 'react-router-dom';

export default class App extends Component {

  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/activity' component={ActivityDetail} />
          <Route path='/mailinglist' component={MailingListForm} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}