import reducer01 from './reducer01'
import reducer02 from './reducer02'

const combineReducers =
  (...reducers) =>
  (state, action) =>
    reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)

const reducers = combineReducers(reducer01, reducer02)
export default reducers
