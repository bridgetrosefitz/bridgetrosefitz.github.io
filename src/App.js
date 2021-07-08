import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import About from './components/about/About'
import Main from './components/main/Main'

const App = () => {

  return (
    <div>
    <Switch>
      <Route
        path="/about"
        render={routerProps => <About {...routerProps} />} />
      <Route
        path="/"
        render={routerProps => <Main {...routerProps} />} />
    </Switch>
  </div>
  )
}

export default withRouter(App)