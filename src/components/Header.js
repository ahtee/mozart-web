import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Jumbotron>
      <h1 className="display-3">
        <i className="fab fa-megaport" /> Mozart
      </h1>
      <p className="lead">Container orchestration in Go</p>
      <Button outline color="success" tag={Link} to="/">
        Get Started
      </Button>
    </Jumbotron>
  );
}

export default Header;
