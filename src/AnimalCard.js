import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'

const AnimalCard = ({animal }) => {
    console.log(animal)
    return(
        
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={animal.image} />
                <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                </Card.Body>
                </Card>
    
           
        )      
     }
            
export default AnimalCard 
