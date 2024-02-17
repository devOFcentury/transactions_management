import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../context/State';

const Informations = () => {

     const params = useParams();

     const {passwordUserConnected, personalTransaction} = useContext(StateContext);
     const findInfoUserConnected = personalTransaction.find(obj => obj.infoConnexion.password === passwordUserConnected);

     let indexParam = parseInt(params.index);
     let typeParam = params.type;
     

     const revenu = findInfoUserConnected?.transactions?.revenu?.map((transactions, index) => {
          if(index === indexParam) {
               return (
                    <div key={index}>
                         <p>
                              <u className='text-center'>Date:</u>
                              <br />
                              <strong>{transactions.date}</strong>
                         </p>
                         <p>
                              <u className='text-center'>Type:</u>
                              <br />
                              <strong>{transactions.type}</strong>
                         </p>
                         <p>
                              <u className='text-center'>Amount:</u>
                              <br />
                              <strong>{transactions.amount} FCFA</strong>
                         </p>
                         <p>
                              <u className='text-center'>Description:</u>
                              <br />
                              <strong>{transactions.description}</strong>
                         </p>
                    </div>
               )
          }
          return null;
     });

     const depense = findInfoUserConnected?.transactions?.depense?.map((transactions, index) => {
          if(index === indexParam) {
               return (
                    <div key={index}>
                         <p>
                              <u className='text-center'>Date:</u>
                              <br />
                              <strong>{transactions.date}</strong>
                         </p>
                         <p>
                              <u className='text-center'>Type:</u>
                              <br />
                              <strong>{transactions.type}</strong>
                         </p>
                         <p>
                              <u className='text-center'>Amount:</u>
                              <br />
                              <strong>{transactions.amount} FCFA</strong>
                         </p>
                         <p>
                              <u className='text-center'>Description:</u>
                              <br />
                              <strong>{transactions.description}</strong>
                         </p>
                    </div>
               )
          }

          return null;
     });


     function afficheInfo() {
          if(typeParam === "revenu") {
               return revenu
          }
          else {
               return depense
          }
     }

  return (
    <div>
         {
              afficheInfo()
         }
    </div>
  )
}

export default Informations;