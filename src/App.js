import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';

class App extends Component {
  render() {
    var mozartCards = ["1", "2", "3"];

    var MozartCards = mozartCards.map( function(cardTitle, cardSubtitle, cardText, cardLink ) {
      return <div className="col-md-4 col-sm-12">
              <Card>
                <CardBody className="card-body">
                  <CardTitle className="card-title">Card Title</CardTitle>
                  <CardSubtitle className="card-subtitle mb-2 text-muted">Card Subtitle</CardSubtitle>
                  <CardBody className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</CardBody>
                  <Button href="#" color="primary">Learn More</Button>
                </CardBody>
              </Card>
            </div>
          });

    return (
      <div className="App">

        <Jumbotron>
          <h1 className="display-3"><i class="fab fa-megaport"></i> Mozart</h1>
          <p className="lead">Container orchestration in Go</p>
          <button type="button" className="btn btn-success">Get Started</button>
        </Jumbotron>

        <div className="container">
        <div className="row">
            { MozartCards }
        </div>
      </div>

    </div> // App.js
    );
  }
}

export default App;
