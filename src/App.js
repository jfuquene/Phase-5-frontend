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

changeSort = sort => this.setState({sort})
 
changeFilter = filter => this.setState({filter})

displayAnimals = () => {
  /// make a copy of all the animals in the state 
  let displayAnimals = [...this.state.animals]


  /// check to see if filter is "all"
  ///if it isnt, then we need to run some filter
  if(this.state.filter !== "All"){
    displayAnimals = displayAnimals.filter(animal => animal.name == this.state.filter )
  }

  ///once the array is filtered 
  ///check to see what sort by, then sort by that 
  if(this.state.sort === "alphabetically"){
    return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
  } else {
    return displayAnimals
  }

}


  render(){
  
  return (
    <div className="App">
       {/* <Login /> */}
       <Navbar  /> 
       <SearchBar changeFilter={this.changeFilter} sort={this.state.sort} changeSort={this.changeSort}/>
       <Home AllAnimals={this.displayAnimals()} FavoriteAnimals={this.likeAnimal} /> 
       <FavoriteAnimals FavoriteAnimals={this.state.FavoriteAnimals}/> 
    
    </div>
  );
 }
}