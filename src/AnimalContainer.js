import React, { Component } from "react";
import AnimalCard from './AnimalCard'


const AnimalContainer = ({animals, FavoriteAnimals}) => {

    
console.log(animals)
        return(
            <div>
             {/* <input type="text" className="input" placeholder="Search..." /> */}
               {animals.map(animal => <AnimalCard  key={animal.id} animal={animal} FavoriteAnimals={FavoriteAnimals} />)}
            </div>
        )
    }

export default AnimalContainer; 