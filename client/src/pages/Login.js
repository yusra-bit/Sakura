import '../index.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
      <div className="App">
        <header className="App-header" align="center">
            Sakura Blog
            </header>
            <div className="container" >
            <h4>Login Page</h4> 
            <br/>
          <form  >
      
            <label>
            Email
                <input type="text" name="email" />
            </label>
            <label>
            Password
                <input type="text" name="pass" />
            </label>
          
            <button className="button-39">Login</button>

            </form>
                       <center><p>Already have an account <b> <Link to="/register" >Register</Link></b> </p></center>

            </div>
         
        
      
      </div>
    );
  }
  
  