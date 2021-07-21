const actions = (dispatch) => {
  function exampleFunction02(text) {
    dispatch({
      type: 'TEST_DISPATCH_02',
      payload: text,
    })
  }
  return {
    exampleFunction02,
  }
}

export default actions
