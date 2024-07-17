import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { Badge } from 'react-bootstrap';

export default function NavbarComponent() {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
          <Nav.Link as={Link} to={"/cart"}>Cart <Badge>0</Badge></Nav.Link>
          <Nav.Link as={Link} to={"/new_product"}>Product Form</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
