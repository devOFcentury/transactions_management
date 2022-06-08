import React, {useState, useReducer, createContext, useEffect} from "react";
import {reducer} from "./reducer";

export const StateContext = createContext();

export default function State({children}) {

  const savedIsConnected = JSON.parse(localStorage.getItem("isConnected"));
  const [isConnected, setIsConnected] = useState(savedIsConnected ? savedIsConnected : false);

  const savedPasswordUserConnected = JSON.parse(localStorage.getItem("passwordUserConnected"));
  const [passwordUserConnected, setPasswordUserConnected] = useState(savedPasswordUserConnected ? savedPasswordUserConnected : "");

  const savedPersonalTransaction = JSON.parse(localStorage.getItem("personaltransaction"));
  function initialState() {
    if(savedPersonalTransaction) {
      return savedPersonalTransaction;
    } else {
      return [];
    }
  }
  const statePersonalTransaction = initialState();
  const[personalTransaction, dispatch] = useReducer(reducer, statePersonalTransaction);
  
  function addUser(typeUser, infoConnexion, nameUser, type, newTransaction){
    dispatch({
      typeUser: typeUser,
      infoConnexion: infoConnexion,
      nameUser: nameUser,
      type: type,
      newTransaction: newTransaction
    })
  }

  function verifValideForm(connexion, inscription, info) {

    const regexUser = /^[a-zA-Z]{1,}\w{2,}$/;
    const regexNomEtPrenom = /^[a-zA-Z]{2,}$/;
    console.log("je suis dans verifValideForm()")

    if(connexion && inscription ) {
      return false;
    }
    else if(inscription) {
      if(regexNomEtPrenom.test(info.nom) && regexNomEtPrenom.test(info.prenom) && regexUser.test(info.user)  && info.password.length >=5) {
        return true
      }
      else return false;
    }
    else if(connexion) {
      if(regexUser.test(info.user)  && info.password.length >=5) {
        return true;
      }
    }
    else {
      return false;
    }
  }

  useEffect(() => {
    localStorage.setItem("personaltransaction", JSON.stringify(personalTransaction));
    localStorage.setItem("isConnected", JSON.stringify(isConnected));
    localStorage.setItem("passwordUserConnected", JSON.stringify(passwordUserConnected));

  }, [personalTransaction, isConnected, passwordUserConnected]);


  return (
    <StateContext.Provider
      value={{
        addUser, personalTransaction, isConnected, setIsConnected, verifValideForm, passwordUserConnected, setPasswordUserConnected
      }}
    >
      {children}
    </StateContext.Provider>
  );
}







// import React from 'react'

// const State = () => {
//   return (
//     <div>
        
//     </div>
//   )
// }

// export default State