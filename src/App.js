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
    animals: [],
    FavoriteAnimals: [],
    sort: "", 
    filter: "All"
}

componentDidMount(){
    fetch('http://localhost:3001/animals')
    .then(res => res.json())
    .then(data => {
       this.setState({
           animals: data
        })
})}

likeAnimal = (animal) => {
    if(!this.state.FavoriteAnimals.includes(animal)){
  this.setState({
  FavoriteAnimals: [...this.state.FavoriteAnimals, animal]})
  } else {
    alert("You can't like the same animal twice")
  }
}

changeSort = () => {
  }
 
changeFilter = () => {
  this.setState({

  })
}

  render(){
  
  return (
    <div className="App">
       {/* <Login /> */}
       <Navbar  /> 
       <SearchBar />
       <Home AllAnimals={this.state.animals} FavoriteAnimals={this.likeAnimal} /> 
       <FavoriteAnimals FavoriteAnimals={this.state.FavoriteAnimals}/> 
      
       
    
    
    </div>
  );
 }
}