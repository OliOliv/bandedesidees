import React, { Fragment, useState } from "react";
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
} from "reactstrap";
import "./styles.scss";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar className="navigation" light expand="md">
        <div className="navWrapper">
          <figure className="logoContainer" href="/">
            <img className="logo" src="/logo.jpg"></img>
          </figure>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Les BDI
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Qui sommmes-nous
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Archives
                </DropdownToggle>
                <DropdownMenu className="navContent" right>
                  <DropdownItem>intervenant.e.s</DropdownItem>
                  <DropdownItem>livres</DropdownItem>
                  <DropdownItem>
                    auteurs.rices et dessinateurs.rices
                  </DropdownItem>
                  <DropdownItem>editions</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
