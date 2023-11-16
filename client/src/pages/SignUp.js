import '../index.css'

import React, { useState, useNavigate } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = (props) => {
    // Define the state with useState hook
    //const navigate = useNavigate();
    const [user, setUser] = useState({
        uname: '',
        email: '',
        password: '',
      //  created_at:'',
    });

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios
        .post('http://localhost:8000/api/users', user)
        .then((res) => {
            setUser({
                uname: '',
                email: '',
                password: '',
               // created_at:'',
            });

            //Push to /
           // navigate('/');
        })
        .catch((err) => {
            console.log('Error in Registration!');
        });
    };

    return (
      <div className="App">
        <header className="App-header" align="center">
            Sakura Blog
            </header>
            <div className="container" >
            <h4>Register Page</h4> 
            <br/>
              <form noValidate onSubmit={onSubmit}>
            <label>
                Name
                <input 
                type="text" 
                name="uname"
                value={user.uname}
                onChange={onChange} />
            </label>
            <label>
            Email
                <input 
                type="text" 
                name="email"
                value={user.email}
                onChange={onChange} />
            </label>
            <label>
            Password
                <input 
                type="text" 
                name="password"
                value={user.password}
                onChange={onChange} />
            </label>
            <input type='submit' className="button-39" />
            <br />
            <br />
          <center><p>You've an account? <b> <Link to="/login" >Login</Link></b> </p></center>
          
            </form>

            </div>
         
        
      
      </div>
    );
  }
  

  export default SignUp;