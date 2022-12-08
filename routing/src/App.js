import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Login from './pages/Login';
import X from './pages/X';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!token){
      navigate("/login")
    }
    else{
      navigate("/")
    }
  }, [token])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/x' element={<X/>} />
      </Routes>
    </div>
  );
}

export default App;
