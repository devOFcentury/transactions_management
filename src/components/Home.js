import React, {useContext} from 'react';
import { StateContext } from '../context/State';

const Home = () => {


  const {setIsConnected, passwordUserConnected, personalTransaction} = useContext(StateContext);

  const findInfoUserConnected = personalTransaction.find(obj => obj.infoConnexion.password === passwordUserConnected);

  const {nameUser, budget} = findInfoUserConnected;
  

  return (
    <div className='container mt-5'>
      <div className="row mb-5">
        <div className="col-6">
          <p className='h2'>{nameUser}</p>
        </div>
        <div className="col-6 signout">
          <button onClick={() => setIsConnected(false)}>Sign out</button>
        </div>
      </div>

      <div className="row mb-5">
          <div className="col-4 offset-8">
            <p className='budget'>Budget: {budget} FCFA</p>
          </div>
      </div>

      <button className='mb-5 btn btn-success'>Faire une transaction</button>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
            <h3>Revenu</h3>
            
        </div>
        <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
            <h3>Dépense</h3>
           
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <h3>Informations Transactions</h3>
            
        </div>
      </div>

    </div>
  )
}

export default Home