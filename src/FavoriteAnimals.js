import React, { Component } from "react";
import FavoriteCard from './FavoriteCard'


class FavoriteAnimals extends Component{


    render (){
        return(
            <div>
                {this.props.FavoriteAnimals.map(animal => <FavoriteCard key={animal.id} animal={animal}/>)}
            </div>
        )
    }


}

export default FavoriteAnimals; 