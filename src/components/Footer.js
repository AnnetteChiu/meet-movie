import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
  state = {}
  render() {
    return (
      <footer>
        <div className="concept">
          <h3>OUR CONCEPT</h3>
          <p>
            We collect the information of movies and TV shows for movie FANs! Welcome to MEET MOVIE!
            <br />
            <span className="m-none">
              When you come to homepage, you'll got what the trending films are right now, just click and take a peek at
              cast or tralier if you want. Also you can search films by keywords, Or take a look at Top100, ranking
              sorted by popularity. If you really have no idea (I know, too hard to choose ), try out 'Find a Series',
              we'll pick some films for you guys!
            </span>
          </p>
        </div>
        <div className="footer-nav container">
          <Link to="/" className="footer-logo">
            <i className="fas fa-broadcast-tower"></i>Meet Movie
          </Link>
          <ul className="navbar">
            <li>
              <Link to="/random/filter">Find a Series</Link>
            </li>
            <li>
              <Link to="/ranking">Top 100</Link>
            </li>
            <li>
              <a href="https://github.com/pepe1113">Contact</a>
            </li>
          </ul>
          <p className="copyright-statement">
            <a href="https://github.com/pepe1113">© 2021 PeiHsin Wang source code </a>
          </p>
          <div className="copyright-statement">
            <a href="https://www.themoviedb.org/">Data Source: The Movie Database</a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
