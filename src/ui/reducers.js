import immutable from 'immutable'

import { UPLOAD } from './actions/action-names'

const DATA = 'data'

const initialState = immutable.fromJS({
  foo: 'bar',
  data: []
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD:
      return state.withMutations((st) => {
        st.set(DATA, action.payload)
      })
    default:
      return state
  }
}

export default rootReducer
