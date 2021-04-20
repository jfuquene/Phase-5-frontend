import React, { Component } from "react";
import AnimalCard from './AnimalCard'
import {Col, Row } from "react-bootstrap"
import SpecificCard from './SpecificCard'


class AnimalContainer extends Component {


    state = {
        clicked: false,
        animal: {}
    }
    clickedAnimal = (animal) =>{
        this.setState({
          clicked: true,
          animal: animal
        });
      }
    render(){
        
        return(
            <div>
             {/* <input type="text" className="input" placeholder="Search..." /> */}
             {this.state.clicked ? <SpecificCard animal={this.state.animal} /> : this.props.animals.map(animal => <AnimalCard  key={animal.id} animal={animal} FavoriteAnimals={this.props.FavoriteAnimals} clickedAnimal={this.clickedAnimal} />)}
{/*              
               {this.props.animals.map(animal => <AnimalCard  key={animal.id} animal={animal} FavoriteAnimals={this.props.FavoriteAnimals} clickedAnimal={this.clickedAnimal} />)}  */}
            </div>
        )
    }
}

export default AnimalContainer; 