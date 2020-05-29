import React, { Component } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import './activity-detail.css';

export class ActivityDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "default title", text: "default text" };
  }

  componentDidMount() {
    console.log("activity-detail react");
    axios.get('/activity/1', {params: {id: 1 }})
      .then(res => {
        const title = res.data.title;
        const text = res.data.text;
        this.setState({ title: title, text: text });
      });
  }

  render() {
    return (
      <div className="activity-detail">
        <h1>{ this.state.title }</h1>
        <p>{ this.state.text }</p>
        <p></p>
      </div>
    );
  }
}

export default withRouter(ActivityDetail);