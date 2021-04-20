import React, { Component } from "react";
import AnimalCard from './AnimalCard'
import {Col, Row } from "react-bootstrap"


const AnimalContainer = ({animals, FavoriteAnimals}) => {

    
        return(
            <div>
             {/* <input type="text" className="input" placeholder="Search..." /> */}
             
               {animals.map(animal => <AnimalCard  key={animal.id} animal={animal} FavoriteAnimals={FavoriteAnimals} />)}
            </div>
        )
    }

export default AnimalContainer; 