import React, { Component } from "react";
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const FavoriteCard = ({animal}) => {
    
        return(
          <Card  style={{ width: '18rem' }}>
          <Card.Img variant="top" src={animal.photos} />
          <Card.Body>
          <Card.Title>{animal.name}</Card.Title>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content. 
          </Card.Text>
          <Button variant="primary">Unlike</Button>
          </Card.Body>
          </Card>      
        )
    }


export default FavoriteCard; 