import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import Upload from './pages/Upload'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/map" component={Map} />
    <Route exact path="/upload" component={Upload} />
  </Switch>
)

export default App
