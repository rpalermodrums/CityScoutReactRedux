import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import App from './App'
import SubmitAddressContainer from './containers/submitAddressContainer'
import SliderContainer from './containers/preferencesSlidersContainer'

const Routes = (
  <Router>
    <Route path="/" component={SubmitAddressContainer} />
    <Route path="/preferences" component={SliderContainer} />
  </Router>
)

export default Routes
