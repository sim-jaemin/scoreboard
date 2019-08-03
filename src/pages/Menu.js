import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {NavLink} from "react-router-dom";


export class Menu extends React.Component {
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
		<Navbar color="dark" dark expand="md">
		  <NavLink className="navbar-brand" to="/">reactstrap</NavLink>
		  <NavbarToggler onClick={this.toggle} />
		  <Collapse isOpen={this.state.isOpen} navbar>
			<Nav className="ml-auto" navbar>
			  <NavItem>
				<NavLink to="/heroes" className="nav-link">heroes</NavLink>
			  </NavItem>
			  <NavItem>
				<NavLink to="/scroeboard"  className="nav-link">scroeboard</NavLink>
			  </NavItem>
			  <UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
				  Options
				</DropdownToggle>
				<DropdownMenu right>
				  <DropdownItem>
					Option 1
				  </DropdownItem>
				  <DropdownItem>
					Option 2
				  </DropdownItem>
				  <DropdownItem divider />
				  <DropdownItem>
					Reset
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