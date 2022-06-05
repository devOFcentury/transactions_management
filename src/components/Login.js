import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
        <form className='border p-5'>
            <h2 className="text-center mb-5">Login</h2>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder='User name' />
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder='Password' />
            </div>

            <div className="mb-3 d-flex justify-content-between">
                <button type="submit" className='btn btn-success'>Validate</button>
                <button className='btn btn-success'>Sign up</button>
            </div>

        </form>
    </div>
  )
}

export default Login