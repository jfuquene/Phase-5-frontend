import React, {Component } from 'react'
import AnimalContainer from './AnimalContainer';
import SearchBar from './SearchBar'
import FavoriteAnimals from './FavoriteAnimals'
import Figure from 'react-bootstrap/Figure'

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
    
    handleDelete = (animal) => { 
      let newAnimal = this.state.FavoriteAnimals.filter(favAnimal => favAnimal !== animal)
      this.setState({ FavoriteAnimals: newAnimal})
    }

    displayAnimals = () => {
        
        let displayAnimals = [...this.state.animals]
      
        if(this.state.filter !== "All"){
          displayAnimals = displayAnimals.filter(animal => animal.group == this.state.filter )
        }
        if(this.state.sort === "dog"){
          return displayAnimals.sort((animal1, animal2) => animal1.group > animal2.group? 1 : -1)
        } else if (this.state.sort === "cat"){
          return displayAnimals.sort((animal1, animal2) => animal1.group > animal2.group? 1 : -1)
        } else {
          return displayAnimals
        }
      }

    
render(){
  console.log(this.state.FavoriteAnimals)
    
  return(
        <div>
                      {/* <Figure>
            <Figure.Image
              width={700}
              height={180}
              alt="171x180"
              src="https://www.gerberlife.com/blog/wp-content/uploads/family-dog.jpg"
            />
            <Figure.Caption>
             
            </Figure.Caption>
          </Figure> */}
              <div class="card bg-light text-black" style={{ width: '34rem' }} >
                <img src="https://www.gerberlife.com/blog/wp-content/uploads/family-dog.jpg" class="card-img" alt="..."/>
                <div class="card-img-overlay">
                 <h5 class="card-title">Begin your Journey here</h5>
                <p class="card-text">Find the your families new Best Friend</p>
                </div>
                </div>
         
        
            <SearchBar changeFilter={this.changeFilter} sort={this.state.sort} changeSort={this.changeSort}/>
            <AnimalContainer animals={this.displayAnimals()} FavoriteAnimals={this.likeAnimal} /> 
            <FavoriteAnimals favoriteAnimals={this.state.FavoriteAnimals} unlikeAnimal={this.handleDelete}/>
        </div>
    )
}
}

export default Home;