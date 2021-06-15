import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'
import SearchBar from '../components/filmHome/SearchBar'

class Header extends React.Component {
  state = {}
  render() {
    return (
      <header className="container">
        <div className="preheader">
          <Link to="/" className="logo">
            <i className="fas fa-broadcast-tower"></i>Asia Movie
          </Link>

          <SearchBar />
          <GoogleAuth />
        </div>
        <ul className="navbar">
          <li>
            <Link to="/list">Browse All</Link>
          </li>
          <li>
            <Link to="/random">Find a Series</Link>
          </li>
          <li>
            <Link to="/ranking">Top 100</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
