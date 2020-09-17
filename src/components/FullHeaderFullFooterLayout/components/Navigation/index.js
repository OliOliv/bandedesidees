import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import React, { Fragment, useState } from "react";

import Link from "next/link";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar className="navigation" light expand="md">
        <div className="navWrapper">
          <Link href="/">
            <figure className="logoContainer">
              <img className="logo" src="/logo.png" alt="logo"></img>
            </figure>
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Les BDI</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  L'association
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
