import React from 'react'
import { Circle, HeatmapLayer, useLoadScript } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { getRoadData } from '../../selectors'

const defaultOptions = {
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 20,
  zIndex: 1
}

const options = {
  'Count Station': {
      strokeColor: '#FF0000',
      fillColor: '#FF0000',
      ...defaultOptions
  },
  'Fixed Time': {
    strokeColor: '#f64a8a',
    fillColor: '#f64a8a',
    ...defaultOptions
  },
  'Ped / Cyc Actuated': {
    strokeColor: '#02075d',
    fillColor: '#02075d',
    ...defaultOptions
  },
  'Semi-Actuated': {
    strokeColor: '#e65100',
    fillColor: '#e65100',
    ...defaultOptions
  },
  'RRFB': {
    strokeColor: '#080808',
    fillColor: '#080808',
    ...defaultOptions
  }
}

const TrafficLights = () => {
  const trafficLightData = useSelector((state) => state.get('trafficLightData'))
  return (
    <div>
    {
      trafficLightData.map((light, index) => {
        if (index === 0) {
          return <div />
        }
        const signalizedIntersection = light.get(0)
        const assetID = light.get(1)
        const camera = light.get(11)
        const signalType = light.get(5)
        const ups = light.get(10)
        const sysCount = light.get(26)
        return (
          <Circle
            center={{
              lat: Number(light.get(30)),
              lng: Number(light.get(31))
            }}
            options={options[light.get(5)]}
          />
        )
      })
    }
    </div>
  )
}

export default TrafficLights
