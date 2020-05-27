import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ActivityDetail } from './components/activity-detail/activity-detail';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ActivityDetail />
  </React.StrictMode>,
  document.getElementById('root')
);