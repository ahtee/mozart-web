import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: prevState => ({ isOpen: !prevState.value })
    });
  }

  render() {
    const { isOpen } = this.state;
    const { title } = this.props;

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">
            <i className="fab fa-megaport" /> {title}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/components">
                  Components
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/zbblanton/mozart">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contributing
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="https://github.com/zbblanton/mozart/issues">
                      Issues
                    </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/zbblanton/mozart/projects">
                      Features
                    </a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <a href="https://github.com/zbblanton/mozart/wiki">Wiki</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
