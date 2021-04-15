import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const AnimalCard = ({animal, FavoriteAnimals }) => {
    
    return(
        
                <Card  style={{ width: '18rem' }}>
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
    
           
        )      
     }
            
export default AnimalCard 
