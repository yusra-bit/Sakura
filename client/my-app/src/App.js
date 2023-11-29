import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import {Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path={'/login'} element={<Login /> } /> 
        <Route path={'/register'} element={<Register /> } />
        <Route path={'/create'} element={<CreatePost /> } />



      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
