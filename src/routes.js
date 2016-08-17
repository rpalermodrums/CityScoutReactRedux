import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import App from './App'
import SubmitAddressContainer from './containers/submitAddressContainer'
import PreferencesSliderContainer from './containers/preferencesSlidersContainer'
import ScoresResult from './containers/ScoresResult'

const Routes = (
  <Router>
    <Route path="/" component={SubmitAddressContainer} />
    <Route path="/preferences" component={PreferencesSliderContainer}>
      <Route path="results" component={ScoresResult} />
    </Route>
  </Router>
)

export default Routes
