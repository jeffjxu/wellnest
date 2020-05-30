import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Form, Button } from 'react-bootstrap';
import './mailing-list.css';

export class MailingListForm extends Component {
  render() {
    return(
      <Form>
        <Form.Group controlId='formBasicName'>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    )
  }
}

export default withRouter(MailingListForm);