import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './card-style.css'


const AnimalCard = ({animal, favoriteAnimals, clickedAnimal}) => {

    
    
    return(
        <div className="card">
            <div className="wrapper">
            <div class="col-sm-4 d-flex pb-3">
                <Card  style={{ width: '30rem' }} class="card card-block">
                <Card.Img className="card_img" variant="top" src={animal.photos} onClick={() => clickedAnimal(animal)}/>
                <Card.Body>
                <Card.Title>{animal.name} - age:{animal.age}</Card.Title>
                <Card.Text>
                {animal.gender}
                </Card.Text>
                <Card.Text>
                {animal.description}
                </Card.Text>
                <Button onClick={ () =>favoriteAnimals(animal)} variant="danger">Like</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
            </div>
        
    
           
        )      
     }
            
export default AnimalCard 
