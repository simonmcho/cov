import immutable from 'immutable'

const initialState = immutable.fromJS({
  foo: 'bar',
  sample: []
})

const rootReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state
  }
}

export default rootReducer
