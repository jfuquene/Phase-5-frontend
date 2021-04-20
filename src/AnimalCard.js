import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const AnimalCard = ({animal, FavoriteAnimals }) => {

    
    
    return(
            <div class="col-sm-4 d-flex pb-3">
                <Card  style={{ width: '18rem' }} class="card card-block">
                <Card.Img variant="top" src={animal.photos} />
                <Card.Body>
                <Card.Title>{animal.name} - age:{animal.age}</Card.Title>
                <Card.Text>
                {animal.gender}
                </Card.Text>
                <Card.Text>
                {animal.description}
                </Card.Text>
                <Button onClick={ () =>FavoriteAnimals(animal)} variant="danger">Like</Button>
                </Card.Body>
                </Card>
            </div>
        
    
           
        )      
     }
            
export default AnimalCard 
