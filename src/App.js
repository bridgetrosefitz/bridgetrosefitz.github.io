import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import About from './components/about/About'
import Main from './components/main/Main'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage)
  };

  return (
    <Switch>
      <Route
        path="/about"
        render={routerProps => <About {...routerProps}
        changeLanguage={changeLanguage}
        currentLanguage={i18n.language} />}/>
      <Route
        path="/"
        render={routerProps => <Main {...routerProps}
        changeLanguage={changeLanguage}
        currentLanguage={i18n.language} />} />
    </Switch>
  )
}

export default withRouter(App)