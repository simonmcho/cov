/* eslint-disable */
import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import './Home.css'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import Map from '../Map'
import Upload from '../Upload'

class Home extends React.Component {
  constructor(props) {
    super(props)

    const initialState = {
      test: []
    }

    this.state = this.initialState

    this._goToUpload = this._goToUpload.bind(this)
    this._goToMap = this._goToMap.bind(this)
  }

  _goToUpload() {
    const { history } = this.props
    history.push('/upload')
  }

  _goToMap() {
    const { history } = this.props
    history.push('/map')
  }

  render() {
    return (
      <Box mx={3} my={3}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
        <Box my={3}>
          <Typography variant="h2" align="center">
            Welcome to Vancouver Road Network Visualization App!
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="h3">
            Select an option below.
          </Typography>
          <Box my={2}>
            <Button onClick={this._goToUpload} size="large" variant="contained">Upload CSV File</Button>
            <Button onClick={this._goToMap} size="large" variant="contained">See Map</Button>
          </Box>
        </Box>
        </Grid>
      </Box>
    )
  }
}

export default Home
