import React, {useContext} from "react";
import { StateContext } from "./context/State";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Addtransaction from "./components/Addtransaction";
import Informations from "./components/Informations";
import './App.css';


function App() {


  const {isConnected} = useContext(StateContext)

  return (
    <div>
      <Routes>
        <Route path='/' element={isConnected ? <Home /> : <Login />}>
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Choisissez un élément pour plus d'infos</p>
                </main>
              }
          />
          <Route path='/:type/:index' element={<Informations/>} />


        </Route>
        <Route path='/signup' element={<Registration />} />
        <Route path='/home' element={isConnected ? <Home/>: <h1 className="text-center mt-5">Veuillez vous connectez</h1>} />
        <Route path='/addtransaction' element={<Addtransaction/>} />
        <Route path="*" element={
            <h1 className="text-center mt-5">OUPS!!!! Cette page n'existe pas désolé</h1>
          } />
      </Routes>
    </div>
  );
}

export default App;
