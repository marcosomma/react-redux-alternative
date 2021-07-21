import actions01 from './actions01'
import actions02 from './actions02'

const rootActions = (dispatch) => {
  return {
    actions01: actions01(dispatch),
    actions02: actions02(dispatch),
  }
}

export default rootActions
