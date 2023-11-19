import '../index.css'

import React, { useState } from "react";
import  { Link } from 'react-router-dom';
import axios from 'axios';


const SignUp = (props) => {
    // Define the state with useState hook
   // const navigate = useNavigate();

  const [value, setValue] = useState({
    name:'',
    email:'',
    password:''
  })
      

  const handleChange = (e) => {
    setValue({...value,[e.target.name]:e.target.value});
  };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
    const register = await axios.post('http://localhost:8000/register', value);

       console.log(register);
       setValue({
        name: "",
        email: "",
        password: "",
      });
//Push to /
//navigate('/login');
      alert("Acount created");
    };

    return (
      <div className="App">
        <header className="App-header" align="center">
            Sakura Blog
            </header>
            <div className="container" >
            <h4>Register Page</h4> 
            <br/>
              <form  onSubmit={handleSubmit}>
            <label>
                Name
                <input 
                type="text" 
                name="name"
                onChange={handleChange}
                value={value.name}/>
            </label>
            <label>
            Email
                <input 
                type="text" 
                name="email"
                onChange={handleChange}
                value={value.email}/>
            </label>
            <label>
            Password
                <input 
                type="text" 
                name="password"
                onChange={handleChange}
                value={value.password} />
            </label>
            <input type='submit' className="button-39" />
            <br />
            <br />
          <center><p>You've an account? <b> <Link to="/login"> Login</Link></b> </p></center>
          
            </form>

            </div>
         
        
      
      </div>
    );
  }
  

  export default SignUp;