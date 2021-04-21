import React, { Component } from "react";
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './card-style.css'

const FavoriteCard = ({animal, unlikeAnimal}) => {
    
        return(
          <div className="container">
          <div className="card">
            <div className="wrapper">
            <div class="col-sm-4 d-flex pb-3">
                <Card className="card" style={{ width: '30rem' }} class="card card-block">
                <Card.Img className="card_img" variant="top" src={animal.photos}/>
                <Card.Body>
                <Card.Title>{animal.name} - age:{animal.age}</Card.Title>
                <Card.Text>
                {animal.gender}
                </Card.Text>
                <Card.Text>
                {animal.description}
                </Card.Text>
                <Button onClick={ () =>unlikeAnimal(animal)} variant="primary">unlike</Button>
                </Card.Body>
                </Card>
                </div>
                </div>
            </div>
            </div>
              
        )
    }


export default FavoriteCard; 
