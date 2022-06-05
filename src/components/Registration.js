import React from 'react'

const Registration = () => {
  return (
    <div>
        <div className="container mt-5">

            <form className="border p-5">
                <h2 className="text-center mb-5">Sign up</h2>
                
                <div className="mb-5">
                    <input type="text" className="form-control" placeholder='lastname' />
                </div>

                <div className="mb-5">
                    <input type="text" className="form-control" placeholder='Firstname' />
                </div>

                <div className="mb-5">
                    <input type="password" className="form-control" placeholder='Username' />
                </div>

                <div className="mb-5">
                    <input type="password" className="form-control" placeholder='password' />
                </div>

                <div className="mb-5 d-flex justify-content-between">
                    <button type='submit' className='btn btn-success'>Validate</button>
                    <button className='btn btn-danger'>Cancel</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Registration