import React, {useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../context/State';

const Login = () => {


    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const {
        personalTransaction,
        isConnected,
        setIsConnected, 
        verifValideForm, 
        setPasswordUserConnected,
    } = useContext(StateContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(isConnected) navigate('/home');
    },[]);


    
    const handleValidate = e => {
        
        e.preventDefault();

        const infoUserConnexion = {
            user: user,
            password: password
        }

        if(verifValideForm(true, false, infoUserConnexion)) {
            const findUserAndPasswordInLocalStorage = personalTransaction.find(obj => obj.infoConnexion.user === user && obj.infoConnexion.password === password);

            if(findUserAndPasswordInLocalStorage) {
                setPasswordUserConnected(findUserAndPasswordInLocalStorage.infoConnexion.password);
                setIsConnected(true);
                navigate('/home')

            } else {
                alert("Incorrect username or password")
            }
        } else {
            alert("Invalid form please verify your information");
        }
    }


    return (
        <div className='container mt-5'>
            <form className='border p-5'>
                <h2 className="text-center mb-5">Login</h2>

                <div className="mb-3">
                    <input type="text" className="form-control" placeholder='User name' onChange={e => setUser(e.target.value)} />
                </div>

                <div className="mb-3">
                    <input type="password" className="form-control" placeholder='Password' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className="mb-3 d-flex justify-content-between">
                    <button type="submit" className='btn btn-success' onClick={handleValidate}>Validate</button>
                    <button className='btn btn-success'><Link to="/signup" className='Link'>Sign up</Link></button>
                </div>

            </form>
        </div>
  )
}

export default Login