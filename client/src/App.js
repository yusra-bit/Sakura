/* eslint-disable react/jsx-no-undef */
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Router, Route,Routes  } from "react-router-dom";
import Welcome from "./pages/Welcome";
//import AddPost from "./pages/AddPost";
function App() {
  return (


      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/register' element={<SignUp />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/articles' element={<Welcome />} />
        </Routes>
      </div>
    
  );
}

export default App;
