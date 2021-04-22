import React, { useState } from "react";
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import './card-style.css'

const FavoriteCard = ({animal, unlikeAnimal}) => {

  const [selectedDate, setSelectedDate] = useState(null)
    
        return(
          
          <div className="container">
          <div className="card">
            <div className="wrapper">
            <div class="col-sm-4 d-flex pb-3">
                <Card className="card" style={{ width: '18rem' }} class="card card-block">
                <Card.Img className="card_img" variant="top" src={animal.photos}/>
                <h4 className="card-title">{animal.name}</h4>
                Description: {animal.description}
                    <br></br><br></br>
                    Age: {animal.age}
                    <br></br><br></br>
                    Breed: {animal.breeds}
                    <br></br><br></br>
                    Gender: {animal.gender}
                    <br></br><br></br>
                    Environment: {animal.environment}
                    <br></br><br></br>
                    Adoption Status: {animal.status}
                    <br></br><br></br>
                    Animal Size: {animal.size}
                    <br></br><br></br>
                    Animal Location: {animal.location} 
                <Button onClick={ () =>unlikeAnimal(animal)} type="button" className="btn btn-primary">unlike</Button>
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

  
                </Card>
                </div>
                </div>
            </div>
            </div>
              
        )
    }


export default FavoriteCard; 
