import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
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
            ]
        }
    }

  render() {
    const c = this.state.cards;
    const MozartCards = c.map(card => 
            <div className="col-md-4 col-sm-12">
                <Card body outline color="primary">
                    <CardBody className="card-body">
                        <CardTitle className="card-title">{card.title}</CardTitle>
                        <CardSubtitle className="card-subtitle mb-2 text-muted">{card.subtitle}</CardSubtitle>
                        <CardBody className="card-text">{card.text}</CardBody>
                        <Button href={card.buttonLink} color="primary" target="_blank">{card.buttonText}</Button>
                    </CardBody>
                </Card>
            </div>
    );

    return (
        <div className="container">
          <div className="row">
              {MozartCards}
          </div>
        </div>
    );
  }
}
