import React, { Component } from 'react';
import './activity-card.css';
import { withRouter } from 'react-router';
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
            <Link to={{ pathname: '/activity' }}>
              <Button variant="primary">Learn More</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(ActivityCard);