import React from 'react'
import {Route, Router, IndexRoute} from 'react-router'
import LandingPage from './components/landingPage'
import PreferencePage from './components/preferencePage'
import ResultPage from './components/resultPage'

const Routes = (
  <Router>
    <Route path="/" component={LandingPage} />
    <Route path="/preferences" component={PreferencePage} />
    <Route path="/results" component={ResultPage} />
  </Router>
)

export default Routes
