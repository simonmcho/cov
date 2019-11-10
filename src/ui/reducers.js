import { fromJS } from 'immutable'
// import transit from 'transit-immutable-js' // https://www.npmjs.com/package/transit-immutable-js

import { UPLOAD, FILTER_TRAFFIC_LIGHT_DATA } from './actions/action-names'

const TRAFFIC_LIGHT_DATA = 'trafficLightData'
const HAS_DATA = 'hasData'
const ALL_DATA = 'allData'
const FILTERED_DATA = 'filteredData'

const initialState = fromJS({
  foo: 'bar',
  trafficLightData: {
    allData: [],
    filteredData: []
  },
  hasData: false
})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD:
      return state.withMutations((st) => {
        st.set(HAS_DATA, true)
        st.setIn([TRAFFIC_LIGHT_DATA, ALL_DATA], fromJS(action.payload))
        st.setIn([TRAFFIC_LIGHT_DATA, FILTERED_DATA], fromJS(action.payload))
      })
    case FILTER_TRAFFIC_LIGHT_DATA:
      return state.withMutations((st) => {
        st.setIn([TRAFFIC_LIGHT_DATA, FILTERED_DATA], fromJS(action.payload))
      })
    default:
      return state
  }
}

export default rootReducer
