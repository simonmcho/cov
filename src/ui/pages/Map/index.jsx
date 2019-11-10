/* eslint-disable */
import React from 'react'
import { fromJS } from 'immutable'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { FILTER_TRAFFIC_LIGHT_DATA } from '../../actions/action-names'

import RenderMap from './components/RenderMap'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: '400px',
  },
  selectWidth: {
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const Map = () => {
  const dispatch = useDispatch()
  const allTrafficLightData = useSelector((state) => state.getIn(['trafficLightData', 'allData']))
  const history = useHistory()
  const classes = useStyles()
  const [cameraType, setCameraType] = React.useState('All')


  const handleChange = (e) => {
    const { value } = e.target
    const filteredData = []
    allTrafficLightData.map((data, index) => {
      if (index === 0) {
        return
      }
      const signalType = data.get(5)
      if (signalType === value) {
        filteredData.push(data)
      }
    })
    
    dispatch({ type: FILTER_TRAFFIC_LIGHT_DATA, payload: filteredData })
    setCameraType(value)
  }

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Box>
        <Box my={3}>
          <Button
            onClick={() => { history.push('/')}}
            size="large"
            variant="contained"
          >
            Click here to go back home
          </Button>
          <Button
            onClick={() => { history.push('/upload')}}
            size="large"
            variant="contained"
          >
            Click here to to upload a new CSV file
          </Button>
        </Box>
        <Box>
          <Typography variant="p">Filter by signal types</Typography>
          <Box>
            <FormControl className={classes.formControl}>
              <Select
                value={cameraType}
                labelWidth={classes.selectWidth}
                onChange={handleChange}
              >
                <MenuItem value="All">
                  All
                </MenuItem>
                <MenuItem value="Count Station">
                  Count Station
                </MenuItem>
                <MenuItem value="Fixed Time">
                  Fixed Time
                </MenuItem>
                <MenuItem value="Ped / Cyc Actuated">
                  Ped / Cyc Actuated
                </MenuItem>
                <MenuItem value="Semi-Actuated">
                  Semi-Actuated
                </MenuItem>
                <MenuItem value="RRFB">
                  RRFB
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box mx={3} my={3}>
        <Box my={4}>
          <RenderMap />
        </Box>
      </Box>
      </Grid>
  )
}

export default Map
