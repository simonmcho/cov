export const test = 'test'
export const getRoadData = (state) => {
  const roadData = state.get('trafficLightData')
  return roadData
}
