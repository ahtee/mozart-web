import React, { Component } from 'react';
import './App.css';
import { Col, Row, } from 'reactstrap';


class Footer extends Component {

  render() {
    return (
          <footer>
            <Row>
              <Col sm="12" md="12" lg="12">
                <p className="text-center">Mozart.go 2018</p>
              </Col>
            </Row>
          </footer>
    );
  }
}

export default Footer;
