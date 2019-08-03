import React, { Component } from "react";
import "./Style.css/NavBar.css";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-scroll";


class NavBar extends Component {
  render() {
    return (
     <header>
        <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="header"><img  alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Link to="AboutBoot" smooth={true} duration={3000} offset={-70}>Acerca de mí <i class="fas fa-arrow-down"></i> </Link>
            <Link to="Proyects" smooth={true} duration={3000} offset={-70}>Mis proyectos <i class="fas fa-arrow-down"></i> </Link>
            <Link to="Contact" smooth={true} duration={3000}>Contactamé <i class="fas fa-arrow-down"></i> </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  </header>
    );
  }
}


export default NavBar;
