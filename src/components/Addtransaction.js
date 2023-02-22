import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { StateContext } from '../context/State';
import { useUserConnected } from '../customHook/useUserConnected.js';

const Addtransaction = () => {

     const [date, setDate] = useState("");
     const [type, setType] = useState("");
     const [amount, setAmount] = useState("");
     const [description, setDescription] = useState("");

     const {
          personalTransaction, 
          passwordUserConnected,
          makeTransaction,
          isConnected,
     } = useContext(StateContext);


     const navigate = useNavigate();
     
     const findInfoUserConnected = personalTransaction.find(obj => obj.infoConnexion.password === passwordUserConnected);

     const {budget} = useUserConnected(isConnected, findInfoUserConnected, false);


     const add = e => {

          e.preventDefault();

          if(date.length !== 0 && type.length !== 0 && amount.length !== 0 && description.length !== 0) {
               
               const transaction = {
                    date: date,
                    type: type,
                    amount: amount,
                    description: description
               }

               const parseAmount = Number(amount);
               const percentage = (parseAmount * 100) / Number(budget);

               if(type === "depense") {
                    if(parseAmount <= budget && percentage >= 40) {
                         const newBudget = Number(budget) - parseAmount;
                         makeTransaction("notNew", "depense", transaction, newBudget, passwordUserConnected);
                         navigate("/home");
                    }
                    
               }

               if(type === "revenu") {
                    const newBudget = Number(budget) + parseAmount;
                    makeTransaction("notNew", "revenu", transaction, newBudget, passwordUserConnected);
                    navigate("/home");
               }

          }

          else {
               alert("veuillez remplir tous les champs");
          }
          
     }


  return (
    <div className='container mt-5'>
         <form className="border p-5">
               <h2 className="text-center mb-5">Add transactions</h2>
               <div className="mb-3">
                    <input onChange={(e) => setDate(e.target.value)} type="date" className="form-control" />
               </div>
               <div className="mb-3 form-floating">
                    <select 
                         onChange={(e) => setType(e.target.options[e.target.selectedIndex].value)}
                         className="form-select"
                    >
                         <option value="select">Select the type</option>
                         <option value="depense">Dépense</option>
                         <option value="revenu">Revenu</option>
                    </select>
               </div>
               <div onChange={(e) => setAmount(e.target.value)} className="mb-3">
                    <input type="number" className="form-control" placeholder='Amount' />
               </div>
               <div className="mb-3">
                    <textarea onChange={(e) => setDescription(e.target.value)} cols="30" rows="10" className="form-control" placeholder='Description'></textarea>
               </div>

               <button className="btn btn-success me-3" onClick={add}>Validate</button>
               <button className="btn btn-danger"><Link to="/" className='Link'>Cancel</Link></button>
         </form>
    </div>
  )
}

export default Addtransaction