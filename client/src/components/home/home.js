import React, { Component } from 'react';
import { chunk } from 'lodash';
import axios from 'axios';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { ActivityCard } from '../activity-card/activity-card';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activities: {} };
  }

  componentDidMount() {
    console.log("here");
    axios.get('/activities')
      .then(res => {
        const activities = res.data;
        this.setState({ activities: res.data });
      })
  }

  render() {
    var cards = [];

    for (var key in this.state.activities) {
      cards.push(<ActivityCard title={this.state.activities[key]['title']} text={this.state.activities[key]['text']} id={key}/>);
    };

    const rows = chunk(cards, 4);
    
    return (
      <Container>
        {rows.map((cols) => (
          <Row>
            {cols.map((col) =>
              <Col sm={12} md={3}>
                {col}
              </Col>
            )}
          </Row>
        ))}
      </Container>
    )
  }
}

export default Home;