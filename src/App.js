import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Card, CardTitle, CardSubtitle, CardBody, Button } from 'reactstrap';

var cards = [
  {
    title: "Title 1",
    subtitle: "Subtitle 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Learn More",
    buttonLink: "#"
  },
  {
    title: "Title 2",
    subtitle: "Subtitle 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Download",
    buttonLink: "#"
  },
  {
    title: "Title 3",
    subtitle: "Subtitle 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Contribute",
    buttonLink: "#"
  }
];

class App extends Component {
  render() {
    const MozartCards = cards.map( function(card)  {
      return (<div className="col-md-4 col-sm-12">
              <Card body outline color="primary">
                <CardBody className="card-body">
                  <CardTitle className="card-title">{card.title}</CardTitle>
                  <CardSubtitle className="card-subtitle mb-2 text-muted">{card.subtitle}</CardSubtitle>
                  <CardBody className="card-text">{card.text}</CardBody>
                  <Button href={card.buttonLink} color="primary" target="_blank">{card.buttonText}</Button>
                </CardBody>
              </Card>
            </div>);
          });

    return (
      <div className="App">

        <Jumbotron>
          <h1 className="display-3"><i className="fab fa-megaport"></i> Mozart</h1>
          <p className="lead">Container orchestration in Go</p>
          <Button outline color="success">Get Started</Button>
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
