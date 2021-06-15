import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import './scss/all.scss'
import Header from './Header'
import Footer from './Footer'
import FilmHome from './pages/FilmHome'
import FilmList from './pages/FilmList'
import FilmShow from './pages/FilmShow'
import FilmRanking from './pages/FilmRanking'
import FilmRandom from './pages/FilmRandom'

const App = () => {
  return (
    <div className="wrap">
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={FilmHome} />
          <Route path="/list" exact component={FilmList} />
          <Route path="/show/:id" exact component={FilmShow} />
          <Route path="/ranking" exact component={FilmRanking} />
          <Route path="/random" exact component={FilmRandom} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
