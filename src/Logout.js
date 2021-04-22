import React from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'


const Logout = (props) =>{

        var login="localhost:3000/Login"


    const handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
        .then(response => {
          props.handleLogout()
          props.history.push('/')
        })
        .catch(error => console.log(error))
      }
    
    return(
    <div>
        {/* { 
        props.loggedInStatus ? 
        <Link to='/logout' onClick={handleClick}>log out?</Link> : 
        null
      }  */}
      <Figure>
  <Figure.Image
    width={500}
    height={180}
    alt="171x180"
    src="data:image/jpeg;base64,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"
  />
  <Figure.Caption>
   Hope to see you back soon!
      <br></br>
   { 
        props.loggedInStatus ? null :
        <Link href={login} onClick={handleClick}>log out?</Link> 
      
      } 
  </Figure.Caption>
</Figure>

     </div>
    )
}

export default Logout; 