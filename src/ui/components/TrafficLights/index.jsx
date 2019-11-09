import React from 'react'
import { Circle, HeatmapLayer, useLoadScript } from '@react-google-maps/api'

const TrafficLights = () => {
  return (
  <Circle 
    center={{
      lat: 49.294133,
      lng: -123.135805
    }}
    options={{
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: 10,
      zIndex: 1
    }}
  />
  )
}

export default TrafficLights
