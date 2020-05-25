import React, { Component } from 'react';
import { chunk } from 'lodash';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ActivityCard } from '../activity-card/activity-card';

export class Home extends Component {
  render() {
    const data = [
      {'title': 'Card Title 1', 'text': 'Some placeholder text'},
      {'title': 'Card Title 2', 'text': 'Some placeholder text'},
      {'title': 'Card Title 3', 'text': 'Some placeholder text'},
      {'title': 'Card Title 4', 'text': 'Some placeholder text'},
      {'title': 'Card Title 5', 'text': 'Some placeholder text'},
      {'title': 'Card Title 6', 'text': 'Some placeholder text'},
      {'title': 'Card Title 7', 'text': 'Some placeholder text'},
      {'title': 'Card Title 8', 'text': 'Some placeholder text'},
      {'title': 'Card Title 9', 'text': 'Some placeholder text'},
      {'title': 'Card Title 10', 'text': 'Some placeholder text'},
      {'title': 'Card Title 11', 'text': 'Some placeholder text'}
    ];

    var cards = [];

    for (const [index, value] of data.entries()) {
      cards.push(<ActivityCard title={value.title} text={value.text} />);
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