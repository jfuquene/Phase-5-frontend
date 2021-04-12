import React, { Component } from "react";
import AnimalCard from './AnimalCard'


class AnimalContainer extends Component{

    state = {
        animals: [],
        filtered: []
    }

    componentDidMount(){
        fetch('http://localhost:3001/animals')
        .then(res => res.json())
        .then(data => {
           this.setState({
               animals: data
            })
    })}
    

    render (){
        console.log(this.state.animals)
        return(
            <div>
            <input type="text" className="input" placeholder="Search..." />
            <ul>

            </ul>
               {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
            </div>
        )
    }

}

export default AnimalContainer; 