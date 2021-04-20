import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'






const Navbar = ({ changeToFavorite, changeToHome, user}) => {
// console.log(user.username)
    return (
      <div>
          <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <NavLink class="nav-link active" to='/home' >Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to='/favoriteAnimals'>FavoriteAnimals</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to='/user'>😀 Profile </NavLink>
        </li>
        <li class="nav-item">
          {/* <NavLink class="nav-link active" to='/resources'>Resources</NavLink> */}
          <NavDropdown title="Resources" id="nav-dropdown" class="nav-link" to='/resources'>
        <NavDropdown.Item eventKey="4.1" class="nav-link active" href="http://localhost:3000/donate" to='/donate' >Donate</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Helpful information on Pet adoption</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Sign out</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to='/Logout'>Log out </NavLink>
        </li>
      </ul>
    </div>
    )


}
export default Navbar;