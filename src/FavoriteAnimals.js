import React, { Component } from "react";
import FavoriteCard from './FavoriteCard'


const FavoriteAnimals = ({FavoriteAnimals}) => {


    
        return(
            <div>
                {FavoriteAnimals.map(animal => <FavoriteCard key={animal.id} animal={animal}/>)}
            </div>
        )
    }

export default FavoriteAnimals; 