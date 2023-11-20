/* eslint-disable react/jsx-no-undef */
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Route,Routes  } from "react-router-dom";
import Welcome from "./pages/Welcome";
import AddPost from "./pages/AddPost";
import About from "./pages/About";
function App() {
  return (


      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/register' element={<SignUp />} />
          <Route  path='/login' element={<Login />} />
          <Route  path='/articles' element={<Welcome />} />
          <Route  path='/add' element={<AddPost />} />
          <Route  path='/about' element={<About />} />

        </Routes>
      </div>
    
  );
}

export default App;
