import React, { Component } from "react";
import AnimalCard from './AnimalCard'
import {Col, Row } from "react-bootstrap"


const AnimalContainer = ({animals, FavoriteAnimals}) => {

    
console.log(animals)
        return(
            <div>
             {/* <input type="text" className="input" placeholder="Search..." /> */}
             <Row>
             <Col sm="4">
               {animals.map(animal => <AnimalCard  key={animal.id} animal={animal} FavoriteAnimals={FavoriteAnimals} />)}
            </Col>
            </Row>
            </div>
        )
    }

export default AnimalContainer; 