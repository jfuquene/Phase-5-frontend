import React, {Component } from 'react'
import AnimalContainer from './AnimalContainer';
import SearchBar from './SearchBar'
import FavoriteAnimals from './FavoriteAnimals'
import Figure from 'react-bootstrap/Figure'
import SpecificCard from './SpecificCard'
import axios from 'axios';
import User from './User';


class Home extends Component {



    state = {
        animals: [],
        filter: "All",
        sort: ""

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
   this.props.setFavorite(animal)
    }



    displayAnimals = () => {
        
        let displayAnimals = [...this.state.animals]
      
        if(this.state.filter !== "All"){
          displayAnimals = displayAnimals.filter(animal => animal.group == this.state.filter )
        }
        if(this.state.sort === "Alphabetically"){
          return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
        } else {
          return displayAnimals
        }
      }
   
render(){
  
  return(
        <div>
              <div class="card bg-light text-white" style={{position: 'fluid', top: 10, left: 150, right: 0, bottom: 110, justifyContent: 'center', alignItems: 'center'}} >
                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F12%2Fcats-dogs-portrait-1-1-2000.jpg" class="card-img" alt="..."/>
                <div class="card-img-overlay">
                 <h1 class="card-title">Welcome to BudFinder!</h1>
                 <h2 className="card-text">Find the your families new Bud</h2>
                </div>
                </div>
         
        
            <SearchBar changeFilter={this.changeFilter} sort={this.state.sort} changeSort={this.changeSort}/>

            <div className="container">
            <AnimalContainer animals={this.displayAnimals()} favoriteAnimals={this.likeAnimal} clickAnimal={this.clickedAnimal}/> 
            </div>
           
        </div>
    )
}
}

export default Home;