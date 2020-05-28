import React, { Component } from 'react';
import axios from 'axios';
import './activity-detail.css';

export class ActivityDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "default title", text: "default text" };
  }

  componentDidMount() {
    console.log("activity-detail react");
    axios.get('/activity/', {params: {id: this.props.id }})
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
      </div>
    );
  }
}

export default ActivityDetail;