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
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
    //       <Fragment>
    //         <figure>
    // /            {/* <img
    //               className="logo"
    //               src={require("./img/logobdi.jpg")}
    //               alt="Logo de la bande des idées"
    //             /> */}
    //           {/* </Link> */}
    //         </figure>
    //         <nav className="navbar navbar-expand-lg navbar-light">
    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#navbarNavDropdown"
    //             aria-controls="navbarNavDropdown"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon" />
    //           </button>
    //           <div className="collapse navbar-collapse center" id="navbarNavDropdown">
    //             <ul className="navbar-nav">
    //               <li className="nav-item active spaceli">
    //                 <a className="nav-link" href="#">
    //                 <Link href='/about'>                    Accueil
    //                     </Link>
    //                 </a>
    //               </li>
    //               <li className="nav-item spaceli">
    //                 <a className="nav-link" href="#">
    //                 <Link href='/about'>
    //                     les bdi
    //                     </Link>
    //                 </a>
    //               </li>
    //               <li className="nav-item spaceli">
    //                 <a className="nav-link" href="#">
    //                   <Link to={{ pathname: `/presentation` }}>
    //                     qui sommes nous
    //                   </Link>
    //                 </a>
    //               </li>
    //               <li className="nav-item dropdown spaceli">
    //                 <a
    //                   className="nav-link dropdown-toggle "
    //                   href="#"
    //                   id="navbarDropdownMenuLink"
    //                   data-toggle="dropdown"
    //                   aria-haspopup="true"
    //                   aria-expanded="false"
    //                 >
    //                   Archives
    //                 </a>
    //                 <div
    //                   className="dropdown-menu square"
    //                   aria-labelledby="navbarDropdownMenuLink"
    //                 >
    //                   <ul className="subMenu">
    //                     <li>
    //                     <Link href='/about'>
    //                         Intervenant.e.s
    //                       </Link>
    //                     </li>
    //                     <li>
    //                     <Link href='/about'>
    //                         livres
    //                          </Link>
    //                     </li>
    //                     <li>
    //                     <Link href='/about'>                        auteurs & dessinateurs
    //                       </Link>
    //                     </li>
    //                     <li>
    //                     <Link href='/about'>                        editeurs
    //                         </Link>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </li>
    //             </ul>
    //           </div>
    //         </nav>
    //       </Fragment>
  );
};

export default Navigation;
