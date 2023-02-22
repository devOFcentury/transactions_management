import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useUserConnected = (isConnected, findInfoUserConnected, provideUserName) => {

     const [nameUser, setNameUser] = useState(null);
     const [budget, setBudget] = useState(null);

     const navigate = useNavigate();

     useEffect(() => {
          if(!isConnected) navigate('/');
          
          else if(findInfoUserConnected) {
               setNameUser(findInfoUserConnected.nameUser);
               setBudget(findInfoUserConnected.budget);
          }

     }, [isConnected]);
     
     return provideUserName ? {budget, nameUser} : {budget};
}