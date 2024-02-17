import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Addtransaction from "./components/Addtransaction";
import Informations from "./components/Informations";
import './App.css';


function App() {



  return (
    <div>
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/signup' element={<Registration />} />
        <Route path='/home' element={<Home/>}>
          <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Choisissez un élément pour plus d'infos</p>
                  </main>
                }
            />
            <Route path='/home/:type/:index' element={<Informations/>} />
        </Route>
        <Route path='/addtransaction' element={<Addtransaction/>} />
        <Route path="*" element={
            <h1 className="text-center mt-5">OUPS!!!! Cette page n'existe pas désolé</h1>
          } />
      </Routes>
    </div>
  );
}

export default App;
