/* eslint-disable */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CSVReader from 'react-csv-reader'

import { UPLOAD } from '../../actions/action-names'

const Uploader = () => {
  const dispatch = useDispatch()

  return (
    <CSVReader onFileLoaded={(data) => dispatch({ type: UPLOAD, payload: data })} />
  )
}

export default Uploader
