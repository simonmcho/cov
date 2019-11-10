/* eslint-disable */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CSVReader from 'react-csv-reader'

import history from '../../history'

import { UPLOAD } from '../../actions/action-names'
import { getRoadData } from '../../selectors'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Uploader = () => {
  const dispatch = useDispatch()
  const roadData = useSelector((state) => getRoadData(state))
  const hasData = useSelector((state) => state.get('hasData'))
  
  if (!hasData) {
    return (
      <Box my={3} mx={3}>
        <Box>
          <Typography variant="h3">Upload your csv file here</Typography>
        </Box>
        <Box mt={4}>
          <CSVReader onFileLoaded={(data) => dispatch({ type: UPLOAD, payload: data })} />
        </Box>
      </Box>
    )
  }
  return (
    <Box my={3} mx={3}>
      <Box>
        <Typography variant="p">Your CSV File has been successfully uploaded.</Typography>
        <Box my={4}>
          <Button size="large" variant="contained">Click here to go back home</Button>
          <Button size="large" variant="contained">Click here to go to your updated map</Button>
        </Box>
      </Box>
      <CSVReader
        onFileLoaded={(data) => dispatch({ type: UPLOAD, payload: data })}
      />
    </Box>
  )
}

export default Uploader
