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
    const path = this.props.location.pathname;
    axios.get(path)
      .then(res => {
        const title = res.data.title;
        const text = res.data.text;
        const image = res.data.image;
        this.setState({ title: title, text: text, image: image });
      });
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="activity-detail">
        <h1>{ this.state.title }</h1>
        <p>{ this.state.text }</p>
        <img src={ this.state.image } alt={ this.state.title + "Image" } />
        <p>{ this.state.image }</p>
      </div>
    );
  }
}

export default withRouter(ActivityDetail);