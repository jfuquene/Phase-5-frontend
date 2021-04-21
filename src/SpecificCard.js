import React from 'react'
import './card-style.css'
import Button from 'react-bootstrap/Button'

const SpecificCard = ({animal, favoriteAnimals, clickBack}) => {

    return(
      <div className = "card text-center shadow ">
            <div className= "overflow">
                <img src={animal.photos} alt="image of animal" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{animal.name}</h4>
                <p className="card-text text-secondary">
                    {animal.description}
                    <br></br>
                    {animal.gender}
                    <br></br>
                    {animal.age}
                    <br></br>
                    {animal.environment}
                    <br></br>
                    {animal.status}
                    <br></br>
                    {animal.size}
                </p>
                <a href="#" className="btn btn-outline-success" onClick={() => clickBack()}> Go back </a>
                <Button variant="danger" onClick={ () =>favoriteAnimals(animal)}> Like</Button>
            </div>
         </div>   

    )

}

export default SpecificCard; 

 // <div className = "card text-center shadow ">
        //     <div className= "overflow">
        //         <img src="" alt="image of animal" className="card-img-top" />
        //     </div>
        //     <div className="card-body text-dark">
        //         <h4 className="card-title">This cards title</h4>
        //         <p className="card-text text-secondary">
        //             blah blah blah 
        //         </p>
        //         <a href="#" className="btn btn-outline-success"> go anywhere</a>
        //     </div>
        //  </div>   
        // <div class="card" style="width: 18rem;">
        //     <img src='' class="card-img-top" alt="..." />
        //     <div class="card-body">
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        //  </div>