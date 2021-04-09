import React, { Component } from "react";
import AnimalCard from './AnimalCard'


class AnimalContainer extends Component{

    // componentDidMount(){
    //     fetch('http://localhost:3001/animals')
    //     .then(res => res.json())
    //     .then(data=> {
    //         this.setState({
    //             animals: [...this.state.animals, data.name ]
    //         })
    //     })
    // }

    render (){
        return(
            <div>
                <AnimalCard />
            </div>
        )
    }


}

export default AnimalContainer; 