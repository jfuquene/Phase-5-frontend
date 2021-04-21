import React, { useState } from "react";
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './card-style.css'

const FavoriteCard = ({animal, unlikeAnimal}) => {

  const [selectedDate, setSelectedDate] = useState(null)
    
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
                <Card.Text>
                Would you like to pick out a date to visit {animal.name} in person?
                <br></br>
                <div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    
                    minDate={new Date()}
                    isClearable
                  />                  
                </div>
                </Card.Text>

                </Card.Body>
                </Card>
                </div>
                </div>
            </div>
            </div>
              
        )
    }


export default FavoriteCard; 
