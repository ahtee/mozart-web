import React, { Component } from 'react';
import {  Collapse,
          Navbar,
          NavbarToggler,
          NavbarBrand,
          Nav,
          NavItem,
          NavLink,
          UncontrolledDropdown,
          DropdownToggle,
          DropdownMenu,
          DropdownItem } from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="Nav">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><i className="fab fa-megaport"></i> Mozart</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/zbblanton/mozart">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contributing
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="https://github.com/zbblanton/mozart/issues">Issues</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://github.com/zbblanton/mozart/projects">Features</a>
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

export default Navigation;
