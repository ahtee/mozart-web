import React, { Component } from 'react';
import './App.css';
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
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i class="fab fa-megaport"></i> Mozart</NavbarBrand>
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
                  Issues
                </DropdownItem>
                <DropdownItem>
                  Features
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Wiki
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
