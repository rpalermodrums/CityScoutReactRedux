import React from 'react'
import {Route, Router} from 'react-router'
import LandingPage from './components/landingPage'
import PreferencesSliderContainer from './containers/preferencesSlidersContainer'
import ScoresResult from './containers/ScoresResult'

const Routes = (
  <Router>
    <Route path="/" component={LandingPage} />
    <Route path="/preferences" component={PreferencesSliderContainer} />
    <Route path="/results" component={ScoresResult} />
  </Router>
)

export default Routes
