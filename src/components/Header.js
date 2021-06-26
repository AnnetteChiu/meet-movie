import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'
import SearchBar from '../components/SearchBar'

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <div className="preheader">
          <Link to="/" className="logo">
            <i className="fas fa-broadcast-tower m-none"></i>
            Meet Movie
          </Link>
          <SearchBar />
          <GoogleAuth />
        </div>
        <ul className="navbar">
          <li>
            <Link to="/random/filter">Find a Series</Link>
          </li>
          <li>
            <Link to="/ranking">Top 100</Link>
          </li>
          <li>
            <Link to="/wishlist">WishList</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
