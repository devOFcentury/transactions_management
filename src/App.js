import React, {useContext} from "react";
import { StateContext } from "./context/State";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import './App.css';



function App() {


  const {isConnected} = useContext(StateContext)

  return (
    <div>
      <Routes>
        <Route path='/' element={isConnected ? <Home /> : <Login />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/home' element={isConnected ? <Home/>: <h1 className="text-center mt-5">Veuillez vous connectez</h1>} />
        <Route path="*" element={
            <h1 className="text-center mt-5">OUPS!!!! Cette page n'existe pas désolé</h1>
          } />
      </Routes>
    </div>
  );
}

export default App;
