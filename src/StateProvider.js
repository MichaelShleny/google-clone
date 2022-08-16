//importing the required dependencies
import React, { createContext, useContext, useReducer } from "react"

//preparing the data layer
export const StateContext = createContext()

/*following is what we call a higher order component*/
//the {children} its refering to is the <App /> in index.js
//we pass in 2 things, reducer and initial state which we made in index.js StateProvider
//initialState = what that app looks like when the data is loaded
//reducer = listens to changes
export const StateProvider =({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

//Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)