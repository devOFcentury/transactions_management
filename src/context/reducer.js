export function reducer(state, action) {

     const updateTransactionRevenu = state.map((obj) => {
       if(obj.nameUser === action.nameUser) {
         return {
           infoConnexion: obj.infoConnexion,
           nameUser: obj.nameUser,
           budget: 0,
           transactions: {
             ...obj.transactions,
             revenu: [...obj.transactions.revenu, action.newTransaction]
           }
         }
       }
   
       return obj;
     });
   
     const updateTransactionDepense = state.map((obj) => {
       if(obj.nameUser === action.nameUser) {
         return {
           infoConnexion: obj.infoConnexion,
           nameUser: obj.nameUser,
           budget: 0,
           transactions: {
             ...obj.transactions,
             depense: [...obj.transactions.depense, action.newTransaction]
           }
         }
       }
   
       return obj;
     });
   
   
   
     switch(action.typeUser) {
       case "new":
         return [
           ...state,
           {
             infoConnexion: action.infoConnexion,
             nameUser: action.nameUser,
             budget: 0,
             transactions: {
               revenu: [],
               depense: []
             }
           }
         ]
   
       case "notNew":
         switch(action.type) {
           case "revenu":
             return updateTransactionRevenu;
           case "depense":
             return updateTransactionDepense;
           default:
             return state;
         }
   
   
       default:
         break;
     }
   
   }