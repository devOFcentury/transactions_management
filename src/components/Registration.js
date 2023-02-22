import React, {useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../context/State';

const Registration = () => {

    const {
        addUser, 
        personalTransaction, 
        verifValideForm,
        isConnected
    } = useContext(StateContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(isConnected) navigate('/home');
    },[]);

    const [lastName, setLastName] = useState("")
    const [firstName, setfirstName] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    const newUser = {
        lastName: lastName,
        firstName: firstName,
        user: user,
        password: password
    }

    const handleValidate = e => {
        e.preventDefault();

        if( verifValideForm(false, true, newUser) ) {
            const findPasswordInLocalStorage = personalTransaction.find(obj => obj.infoConnexion.password === password);

            if(findPasswordInLocalStorage) {
                alert("This password already exists please choose another one");
            } else {
                addUser("new", newUser, `${firstName} ${lastName}`);
                navigate("/");
            }
        } else {
            alert("Invalid form please verify your information");
        }
    }

    return (
        <div>
            <div className="container mt-5">

                <form className="border p-5">
                    <h2 className="text-center mb-5">Sign up</h2>
                    
                    <div className="mb-5">
                        <input type="text" className="form-control" placeholder='lastname' onChange={e => setLastName(e.target.value)}  />
                    </div>

                    <div className="mb-5">
                        <input type="text" className="form-control" placeholder='Firstname' onChange={e => setfirstName(e.target.value)} />
                    </div>

                    <div className="mb-5">
                        <input type="text" className="form-control" placeholder='Username' onChange={e => setUser(e.target.value)} />
                    </div>

                    <div className="mb-5">
                        <input type="password" className="form-control" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-5 d-flex justify-content-between">
                        <button type='submit' className='btn btn-success' onClick={handleValidate}>Validate</button>
                        <button className='btn btn-danger'><Link className='Link' to="/">Cancel</Link></button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Registration