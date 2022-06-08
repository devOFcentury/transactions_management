import React, {useState, useReducer, createContext, useEffect} from "react";
import {reducer} from "./reducer";

export const StateContext = createContext();

export default function State({children}) {

  const savedIsConnected = JSON.parse(localStorage.getItem("isConnected"));


  const [isConnected, setIsConnected] = useState(savedIsConnected ? savedIsConnected : false);

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
  
  function addUser(typeUser, infoConnexion, type, newTransaction){
    dispatch({
      typeUser: typeUser,
      infoConnexion: infoConnexion,
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

  }, [personalTransaction, isConnected]);


  return (
    <StateContext.Provider
      value={{
        addUser, personalTransaction, isConnected, setIsConnected, verifValideForm
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