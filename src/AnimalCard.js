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
                <Card  style={{ width: '50rem' }} class="card card-block">
                <Card.Img className="card_img" variant="top" src={animal.photos} onClick={() => clickedAnimal(animal)}/>
                <Card.Body>
                <Card.Title>Name: {animal.name}</Card.Title>
                <Card.Text>
                Age: {animal.age}
                </Card.Text>
                <Card.Text>
                Breed: {animal.breeds}
                </Card.Text>
                <Card.Text>
                Gender: {animal.gender}
                </Card.Text>
                {/* <Card.Text>
                Description: {animal.description}
                </Card.Text> */}
                <Card.Text>
                    Location: {animal.location}
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
