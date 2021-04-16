import React, {Component } from 'react'
import AnimalContainer from './AnimalContainer';
import SearchBar from './SearchBar'
import FavoriteAnimals from './FavoriteAnimals'

class Home extends Component {

    state = {
        animals: [],
        FavoriteAnimals: [],
        sort: "", 
        filter: "All",
    };
    
   componentDidMount() {
        fetch('http://localhost:3001/animals')
        .then(res => res.json())
        .then(data => {
           this.setState({
               animals: data
            })
    })};

    changeSort = sort => this.setState({sort})
 
    changeFilter = filter => this.setState({filter})
    


    likeAnimal = (animal) => {
        if(!this.state.FavoriteAnimals.includes(animal)){
      this.setState({
      FavoriteAnimals: [...this.state.FavoriteAnimals, animal]})
      } else {
        alert("You can't like the same animal twice")
      }
    }

    unlikeAnimal = (e) => {
      var arr = [...this.state.FavoriteAnimals];
      var index = arr.indexOf(e.target.value)
      if (index !== -1){
        arr.splice(index, 1);
        this.setState({FavoriteAnimals: arr})
      }
    }

    displayAnimals = () => {
        
        let displayAnimals = [...this.state.animals]
      
        if(this.state.filter !== "All"){
          displayAnimals = displayAnimals.filter(animal => animal.species == this.state.filter )
        }
        // if(this.state.sort === "dog"){
        //   return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
        // } else if (this.state.sort === "cat"){
        //   return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
        // } else {
          return displayAnimals
        }

    
render(){
  console.log(this.state.FavoriteAnimals)
    
  return(
        <div>
            <SearchBar changeFilter={this.changeFilter} sort={this.state.sort} changeSort={this.changeSort}/>
            <AnimalContainer animals={this.displayAnimals()} FavoriteAnimals={this.likeAnimal} /> 
            <FavoriteAnimals favoriteAnimals={this.state.FavoriteAnimals} unlikeAnimal={this.unlikeAnimal}/>
        </div>
    )
}
}

export default Home;