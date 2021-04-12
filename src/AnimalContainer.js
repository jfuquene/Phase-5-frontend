import React, { Component } from "react";
import AnimalCard from './AnimalCard'


class AnimalContainer extends Component{

    

    render (){
        console.log(this.props)
        return(
            <div>
            <input type="text" className="input" placeholder="Search..." />
            <ul>

            </ul>
               {this.props.Animals.map(animal => <AnimalCard key={animal.id} animal={animal} FavoriteAnimals={this.props.FavoriteAnimals} />)}
            </div>
        )
    }

}

export default AnimalContainer; 