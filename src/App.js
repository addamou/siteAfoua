import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navigation from './Composants/comp/Navigation'
import Accueil from './Composants/pages/Accueil'
import Service from './Composants/pages/Service'
import Propos from './Composants/pages/Propos'
import Contact from './Composants/pages/Contact'
import Footer from './Composants/comp/Footer'
//import NotFound from './Composants/pages/NotFound'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
      <Route path="/" exact component={Accueil} />
      <Route path="/services" exact component={Service} />
      <Route path="/apropos" exact component={Propos} />
      <Route path="/contact" exact component={Contact} />
      {/*<Route component={NotFound} />*/}
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
