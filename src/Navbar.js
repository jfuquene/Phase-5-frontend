import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'






const Navbar = ({ user}) => {
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
        <NavLink class="nav-link active" to='/resources'>Resources </NavLink>
        </li>
        <li class="nav-item">
        <NavLink class="nav-link active" href="http://localhost:3000/donate" to='/donate'>Donate</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link active" to='/Logout'>Log out </NavLink>
        </li>
      </ul>
    </div>
    )


}
export default Navbar;
