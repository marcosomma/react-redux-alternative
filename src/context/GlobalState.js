import React, { createContext, useReducer } from 'react'
import reducers from './reducers'
import actions from './actions'

const initialState = {
  isLoading: false,
  title: 'React BoilerPlate',
  text: 'reducer example',
}

export const GlobalContext = createContext(initialState)

export const GlobalState = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState)
  const actionsRooter = actions(dispatch)

  return (
    <GlobalContext.Provider
      value={{
        actionsRooter,
        state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
