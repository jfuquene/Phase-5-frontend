import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import FavoriteAnimals from './FavoriteAnimals'
import SearchBar from './SearchBar'


 export default class App extends Component {

  state = {
    view: "Home"
  }

  changeToFavorite = () => {
    this.setState({
      view: "Favorite Animals"
    })
  }

  changeToHome = () => {
    this.setState({
      view: "Home"
    })
  }

  render(){
  
  return (
    <div className="App">
       {/* <Login /> */}
       <Navbar changeToHome={this.changeToHome} changeToFavorite={this.changeToFavorite} /> 
       { this.state.view === "Favorite Animals" ? <FavoriteAnimals /> : null }
       <Home /> 
       <SearchBar/>
       
    
    
    </div>
  );
 }
}