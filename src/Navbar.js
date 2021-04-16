import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Home from './Home'
import { NavLink } from 'react-router-dom';





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
          <NavLink class="nav-link active" to='/donate'>Donate</NavLink>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
      </ul>
    </div>
    )


}
export default Navbar;