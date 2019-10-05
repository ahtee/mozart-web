import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Header(props) {
  const { title, subTitle } = props;

  return (
    <Jumbotron
      style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}
    >
      <div>
        <h1 className="display-3">
          <i className="fab fa-megaport" /> {title}
        </h1>
        <p className="lead">{subTitle}</p>
        <Button
          outline
          color="success"
          tag={Link}
          to={`${process.env.PUBLIC_URL}/mozart/components`}
        >
          Get Started
        </Button>
      </div>
    </Jumbotron>
  );
}

export default Header;
