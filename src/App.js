import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';

class App extends Component {
  render() {
    var mozartCards = ["Title 1", "Title 2", "Title 3"];

    var MozartCards = mozartCards.map( function(cardTitle, cardSubtitle, cardText, cardLink ) {
      return <Card>
              <CardBody className="card-body">
                <CardTitle className="card-title">{cardTitle}</CardTitle>
                <CardSubtitle className="card-subtitle mb-2 text-muted">{cardSubtitle}</CardSubtitle>
                <CardBody className="card-text">{cardText}</CardBody>
                <Button href="#" className="card-link">{cardLink}</Button>
              </CardBody>
            </Card>
          });

    return (
      <div className="App">

        <Jumbotron>
          <h1 className="display-3">Mozart <i class="fab fa-megaport"></i></h1>
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
