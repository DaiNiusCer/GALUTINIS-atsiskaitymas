import React from 'react';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
   <>
  <Routes>
<Route path="/main"element={<Main/>}/>
<Route path="/register"element={<Register/>}/>
<Route path="/login"element={<Login/>}/>

</Routes>
   </>
  );
}

export default App;
