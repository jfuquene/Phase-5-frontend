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
import Donate from './Donate'
import Resources from './Resources'
import User from './User'
import Logout from './Logout'



 export default class App extends Component {

  state = {
    isLoggedIn: false, 
    user: []
}



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
UNSAFE_componentWillMount() {
  return this.props.loggedInStatus ? this.redirect() : null
}


  render(){
    console.log(this.state.user)
  return (
    <div className="App">
       {/* <Login /> */}
       <BrowserRouter>
       <Switch>
         <div>
         <Route path='/' render={props => (<Landing {...props} loggedInStatus={this.state.isLoggedIn}/>)}/>
         <Route path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} loggedINStatus={this.state.isLoggedIn}/>)}/>
         <Route path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>)}/>
        
         <Navbar user={this.state.user}/>
         <Route path='/home' component={Home}/> 
         <Route path='/donate' component={Donate}/>
         <Route path='/favoriteAnimals' component={FavoriteAnimals}/>
         <Route path='/resources' component={Resources}/>
         <Route path='/user' component={User}/>
         <Route path='/logout' render={props => (<Logout {...props} loggedInStatus={this.state.isLoggedIn}/>)}/>
  
         </div>
       </Switch>
       </BrowserRouter>
       
       
  
       
    
    </div>
  );
 }
}