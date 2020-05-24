import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './activity-card.css';
import { Card, Button } from 'react-bootstrap';

export class ActivityCard extends Component {
  render() {
    return (
      <div className="card">
        <Card>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some placeholder text for card
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ActivityCard;