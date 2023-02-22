import React, { useContext, } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { StateContext } from '../context/State';
import { useUserConnected } from '../customHook/useUserConnected.js';

const Home = () => {

  const {
    isConnected, 
    setIsConnected, 
    passwordUserConnected, 
    personalTransaction, 
    setPasswordUserConnected,
  } = useContext(StateContext);

  const navigate = useNavigate();
  
  const findInfoUserConnected = personalTransaction.find(obj => obj.infoConnexion.password === passwordUserConnected);

  const {budget, nameUser} = useUserConnected(isConnected, findInfoUserConnected, true);

  const incomes = findInfoUserConnected?.transactions?.revenu?.map(({date, amount, type}, index) => {
    return (
      <div key={index} className="card my-3 bg-info">
        <div className="card-body">
          <h5 className="card-title">Date: {date}</h5>
          <p className='card-text'>Amount: {amount}</p>
          <button className='btn btn-success'><Link className='Link' to={`/home/${type}/${index}`}>More</Link></button>
        </div>
      </div>
    )
  });

  const expenses = findInfoUserConnected?.transactions?.depense?.map(({date, amount, type}, index) => {
    return (
      <div key={index} className="card my-3 bg-danger">
          <div className="card-body">
              <h5 className="card-title">Date: {date}</h5>
              <p className='card-text'>Amount: {amount} FCFA</p>
              <button className='btn btn-success me-auto'><Link className='Link' to={`/home/${type}/${index}`}>More</Link></button>
          </div>
      </div>
  );
  });
  

  return (
    <div className='container mt-5'>
      <div className="row mb-5">
        <div className="col-6">
          <p className='h2'>{nameUser}</p>
        </div>
        <div className="col-6 signout">
          <button onClick={() => {
            setPasswordUserConnected('');
            setIsConnected(false); navigate('/')
            }}>Sign out</button>
        </div>
      </div>

      <div className="row mb-5">
          <div className="col-4 offset-8">
            <p className='budget'>Budget: {budget} FCFA</p>
          </div>
      </div>

      <button className='mb-5 btn btn-success'><Link to="/addtransaction" className='Link'>Make a transaction</Link></button>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
            <h3>Incomes</h3>
            {incomes}
        </div>
        <div className="col-12 col-md-6 col-lg-4 border-end mb-4 mb-lg-none">
            <h3>Expenses</h3>
            {expenses}
        </div>
        <div className="col-12 col-md-6 col-lg-4">
            <h3>Informations Transactions</h3>
            <Outlet/>
        </div>
      </div>

    </div>
  )
}

export default Home