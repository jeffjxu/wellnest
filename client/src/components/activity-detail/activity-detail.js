import React, { Component } from 'react';
import axios from 'axios';
import './activity-detail.css';

export class ActivityDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("activity-detail react");
    axios.get('/activities/hello');
  }

  render() {
    return (
      <div className="activity-detail">
        <h1>Activity Title</h1>
        <p>some activity description</p>
      </div>
    );
  }
}

export default ActivityDetail;