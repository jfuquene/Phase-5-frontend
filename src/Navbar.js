import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'



const Navbar = () => {

    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link eventKey="Link-1">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Resources</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Donate</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" >Favorite Animals</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5" >Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-6" >Log out</Nav.Link>
  </Nav.Item>
</Nav>
    )


}
export default Navbar;