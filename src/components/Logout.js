import React, {useState, useContext} from 'react';
import { StateContext } from '../context/State';

const Logout = () => {

     const {setIsConnected} = useContext(StateContext);


     const [checked, setChecked] = useState(false);
     const handleChange = e => {
          setChecked(e.target.checked);
          setIsConnected(false);
     }

  return (
    <div className='logoutContainer'>
         <p className='signout'>Sign out</p> &nbsp;&nbsp;
         <label className="switch">
              <input type="checkbox" onChange={handleChange} checked={checked} />
              <span className="slider round"></span>
         </label>
    </div>
  )
}

export default Logout