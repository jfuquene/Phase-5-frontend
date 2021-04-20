import React, { Component } from "react";
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const FavoriteCard = ({animal, unlikeAnimal}) => {
    
        return(
          <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" top width="100" src={animal.photos} />
          <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>
          {animal.description}
          </Card.Text>
          <Button variant="primary" onClick={() =>unlikeAnimal(animal)}>Unlike</Button>
          </Card.Body>
          </Card>      
        )
    }


export default FavoriteCard; 