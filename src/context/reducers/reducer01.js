const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST_DISPATCH_01':
      return {
        ...state,
        test: `${state.text.replace(' 01', '').replace(' 02', '')}you click on ${action.payload}`,
      }
    default:
      return state
  }
}

export default reducer
