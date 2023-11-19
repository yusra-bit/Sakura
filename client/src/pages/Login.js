import '../index.css'
import React, {useState} from 'react';

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function Login() {
  const navigate = useNavigate();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/login', {email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
    navigate('/articles');

  }
  

    return (
      <div className="App">
        <header className="App-header" align="center">
            Sakura Blog
            </header>
            <div className="container" >
            <h4>Login Page</h4> 
            <br/>
          <form  onSubmit={handleSubmit} >
      
            <label>
            Email
                <input type="text" 
                name="email"
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
            Password
                <input type="text" 
                name="password"
                onChange={(e) => setPassword(e.target.value)} />
            </label>
          
            <button className="button-39" >Login</button>

            </form>
                       <center><p>Already have an account <b> <Link to="/register" >Register</Link></b> </p></center>

            </div>
         
        
      
      </div>
    );
  }
  
  