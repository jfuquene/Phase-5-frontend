import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import FavoriteAnimals from './FavoriteAnimals';
import SearchBar from './SearchBar';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from "./Landing";
import Login from './Login';
import Signup from './Signup';



 export default class App extends Component {

  state = {
    // animals: [],
    // FavoriteAnimals: [],
    // sort: "", 
    // filter: "All", 
    isLoggedIn: false, 
    user: {}
}

// componentDidMount(){
//     fetch('http://localhost:3001/animals')
//     .then(res => res.json())
//     .then(data => {
//        this.setState({
//            animals: data
//         })
// })}

// likeAnimal = (animal) => {
//     if(!this.state.FavoriteAnimals.includes(animal)){
//   this.setState({
//   FavoriteAnimals: [...this.state.FavoriteAnimals, animal]})
//   } else {
//     alert("You can't like the same animal twice")
//   }
// }

// changeSort = sort => this.setState({sort})
 
// changeFilter = filter => this.setState({filter})

// displayAnimals = () => {
//   /// make a copy of all the animals in the state 
//   let displayAnimals = [...this.state.animals]


//   /// check to see if filter is "all"
//   ///if it isnt, then we need to run some filter
//   if(this.state.filter !== "All"){
//     displayAnimals = displayAnimals.filter(animal => animal.name == this.state.filter )
//   }

//   ///once the array is filtered 
//   ///check to see what sort by, then sort by that 
//   // if(this.state.sort === "dog"){
//   //   return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
//   // } else if (this.state.sort === "cat"){
//   //   return displayAnimals.sort((animal1, animal2) => animal1.name > animal2.name? 1 : -1)
//   // } else {
//     return displayAnimals
//   }


  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }


  handleLogin = (data) => {
  this.setState({
    isLoggedIn: true, 
    user: data.user
  })  
  }

handleLogout = () => {
  this.setState({
  isLoggedIn: false,
  user: {}
  })
}
componentWillMount() {
  return this.props.loggedInStatus ? this.redirect() : null
}


  render(){
  
  return (
    <div className="App">
       {/* <Login /> */}
       <BrowserRouter>
       <Switch>
         <Route exact path='/' render={props => (<Landing {...props} loggedInStatus={this.state.isLoggedIn}/>)}/>
         <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedINStatus={this.state.isLoggedIn}/>)}/>
         <Route exact path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
       </Switch>
       </BrowserRouter>
       
       
       <Navbar/> 
       {/* <SearchBar changeFilter={this.changeFilter} sort={this.state.sort} changeSort={this.changeSort}/> */}
       <Home />
    
    </div>
  );
 }
}