import { fromJS } from 'immutable'
// import transit from 'transit-immutable-js' // https://www.npmjs.com/package/transit-immutable-js

import { UPLOAD } from './actions/action-names'

const TRAFFIC_LIGHT_DATA = 'trafficLightData'
const HAS_DATA = 'hasData'

const initialState = fromJS({
  foo: 'bar',
  trafficLightData: [],
  hasData: false
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD:
      return state.withMutations((st) => {
        st.set(HAS_DATA, true)
        st.set(TRAFFIC_LIGHT_DATA, fromJS(action.payload))
      })
    default:
      return state
  }
}

export default rootReducer
