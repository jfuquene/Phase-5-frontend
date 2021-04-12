import React, { Component } from "react";
import FavoriteCard from './FavoriteCard'


class FavoriteAnimals extends Component{

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
                <FavoriteCard />
            </div>
        )
    }


}

export default FavoriteAnimals; 