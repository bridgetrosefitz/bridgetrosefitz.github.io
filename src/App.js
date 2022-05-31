import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './pages/about/About'
import Main from './pages/main/Main'
import { useTranslation } from 'react-i18next'
import AOS from 'aos';
import "aos/dist/aos.css"

const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = selectedLanguage => {
    i18n.changeLanguage(selectedLanguage)
  };

  useEffect(() => {
    AOS.init()
  }, [])

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

export default App