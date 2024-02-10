import React, { useReducer } from 'react'

const DispathContext = React.createContext();
const StateContext = React.createContext();



function AppProvider({children}) {
   const initialState = {
    cartItems: []
   }


    const reducer = (state,action) => {
        console.log(action)
        switch(action.type){
            case "add_to_cart":
                return {
                    ...state,
                    cartItems : [...state.cartItems,action.payload]
                };
            default :{
                return state;
            }     
        }
    }


    let [state , dispatch] = useReducer(reducer,initialState)

  return (
    <DispathContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
               {children}
        </StateContext.Provider>
    </DispathContext.Provider>
  )
}

export {
    AppProvider,DispathContext,StateContext
}