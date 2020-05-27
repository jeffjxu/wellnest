import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './activity-card.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export class ActivityCard extends Component {

  render() {
    return (
      <div className="card">
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.text}
            </Card.Text>
            <BrowserRouter>
              <Link to={{ pathname: '/activities/' + this.props.id }}>
                <Button variant="primary">Learn More</Button>
              </Link>
            </BrowserRouter>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ActivityCard;