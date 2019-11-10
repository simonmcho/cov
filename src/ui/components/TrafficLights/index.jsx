import React, { useState } from 'react'
import { Circle } from '@react-google-maps/api'
import { useSelector, useDispatch } from 'react-redux'
import { getRoadData } from '../../selectors'
import { CircularProgress } from '@material-ui/core'

const defaultOptions = {
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 8,
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
  const filteredTrafficLightData = useSelector((state) => state.getIn(['trafficLightData', 'filteredData']))
  const [dataWithCoords, setDataWithCoords] = useState([])

  // React.useEffect(() => {
  //   setDataWithCoords(filteredTrafficLightData);
  // }, [])

  const _getSingleLightData = ({ lat = 0, lng = 0}) => {
    if (lat === 0 && lng === 0) {
      return // does nothing if no lat/lng data
    }
    
    dataToMap.filter((data) => {
      console.log(data)
      // if (data.get(30) === lat && data.get(31) === lng) {
      //   // found data
      //   // remove rest of data

      // }
    })
    
  }

  const setCoords = (circle) => {
    const coords = {
      lat: circle.center.lat(),
      lng: circle.center.lng()
    }

    filteredTrafficLightData.map((data) => {
      const latFromData = Number(data.get(30))
      const lngFromData = Number(data.get(31))

      if (latFromData === coords.lat && lngFromData === coords.lng) {
        console.log("WOOO!!!")
      } else {
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(latFromData)
        console.log(lngFromData)
        console.log('_____________________________________________')
        console.log(coords.lat)
        console.log(coords.lng)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      }
    })

    // setDataWithCoords()
    
  }

  
  const handleClick = (event) => {
    const { lat, lng } = event.latLng
    const clickedData = filteredTrafficLightData.filter((data) => {
      const latDiff = Math.abs(lat() - Number(data.get(30)))
      const lngDiff = Math.abs(lng() - Number(data.get(31)))

      if (latDiff < 0.0009 && lngDiff < 0.0009) {
        const intersection = data.get(0)
        const assetID = data.get(1)
        const camera = data.get(11)
        const signalType = data.get(5)
        const ups = data.get(10)
        const sysCount = data.get(26)
        return {
          intersection,
          assetID,
          camera,
          signalType,
          ups,
          sysCount
        }
      }
    })
    console.log(clickedData)
  }
  return (
    <div>
    {
      filteredTrafficLightData.map((data, index) => {
        if (index === 0) {
          return <div />
        }
        const signalizedIntersection = data.get(0)
        const assetID = data.get(1)
        const camera = data.get(11)
        const signalType = data.get(5)
        const ups = data.get(10)
        const sysCount = data.get(26)
        return (
          <Circle
            onLoad={setCoords}
            center={{
              lat: Number(data.get(30)),
              lng: Number(data.get(31))
            }}
            options={options[data.get(5)]}
            onClick={handleClick}
          />
        )
      })
    }
    </div>
  )
}

export default TrafficLights
