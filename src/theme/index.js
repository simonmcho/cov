/* eslint-disable no-console */
/**
 * Styled System theme config file
 *
 * @see https://material-ui.com/customization/theming/
 * @see https://material-ui.com/customization/components/
 *  for adding more theme config values
 */

import { createMuiTheme } from '@material-ui/core/styles'

import typography from './typography'
// Configure Material UI theme
const theme = createMuiTheme({
  typography,
  palette: {
    primary: {
      main: '#54595f'
    },
    accent: {
      main: '#DFE3EB'
    },
    type: 'light'
  }
})

export default theme
