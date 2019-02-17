import React, { Component } from 'react';
import { Col, Row, } from 'reactstrap';

export default class Footer extends Component {

  render() {
    return (
    <footer>
      <Row>
        <Col sm="12" md="12" lg="12">
          <p className="text-center">Mozart.go &copy;2018</p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="12" lg="12">
          <p className="text-center">Licensed through MIT</p>
        </Col>
      </Row>
    </footer>
    );
  }
}
