import React from 'react'

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className="row mb-5">
          <div className="col-4 offset-8">
            <p className='budget'>Budget: 0 FCFA</p>
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