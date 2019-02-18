import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
        <Jumbotron>
            <h1 className="display-3"><i className="fab fa-megaport"></i> Mozart</h1>
            <p className="lead">Container orchestration in Go</p>
            <Button outline color="success" tag={Link} to="/">Get Started</Button>
        </Jumbotron>
        );
    }
}