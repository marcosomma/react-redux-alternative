const actions = (dispatch) => {
  function exampleFunction01(text) {
    dispatch({
      type: 'TEST_DISPATCH_01',
      payload: text,
    })
  }
  return {
    exampleFunction01,
  }
}

export default actions
