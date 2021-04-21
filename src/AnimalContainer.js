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
      clickBack = () => {
          this.setState({
              clicked: false
          })
      }
    render(){
        
        return(
            <div className="row">
             {/* <input type="text" className="input" placeholder="Search..." /> */}
             {this.state.clicked ? <SpecificCard animal={this.state.animal} favoriteAnimals={this.props.favoriteAnimals} clickBack={this.clickBack} /> : this.props.animals.map(animal => <AnimalCard  key={animal.id} animal={animal} favoriteAnimals={this.props.favoriteAnimals} clickedAnimal={this.clickedAnimal} />)}

            </div>
        )
    }
}

export default AnimalContainer; 