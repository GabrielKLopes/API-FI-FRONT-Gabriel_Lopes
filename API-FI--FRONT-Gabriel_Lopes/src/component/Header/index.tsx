import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header: React.FC = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3 px-md-4">
          <Navbar.Brand href="#home">Lojinha Da IEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to="/delivery">CRUD ENTREGAS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}

export default Header;