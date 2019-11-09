/* eslint-disable */
import React from 'react'
import { GoogleMap, InfoBox, LoadScript, Circle, HeatmapLayer, useLoadScript } from '@react-google-maps/api'
import { Link as ReactRouterLink } from 'react-router'

import TrafficLights from '../../components/TrafficLights'

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA-dxCYgAm9eAlHH8WjBV_d_rmoOcVm_QE" // ,
    // ...otherOptions
  })

  const renderMap = () => {
    return (
      <GoogleMap
        // options={options}
        // onLoad={onLoad}
        mapContainerStyle={{
          height: "800px",
          width: "1200px"
        }}
        zoom={13}
        center={{
          lat: 49.246292,
          lng: -123.116226
        }}
      >
        <TrafficLights />
      </GoogleMap>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <div>MAP NOT YET LOADED</div>
}

export default Map
