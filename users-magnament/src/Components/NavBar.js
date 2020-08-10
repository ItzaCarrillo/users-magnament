import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">CRUD PROJECT</Navbar.Brand>   
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/add">Add User</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/EditUsers">Edit Users</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/UsersList">Users List</Nav.Link>
        </Nav>
      </Navbar.Collapse>   
    </Navbar>
  );
};

export default NavBar;