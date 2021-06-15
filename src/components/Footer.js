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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptate, cumque et consectetur, modi est
            in odit quas, explicabo dicta necessitatibus facere assumenda non molestias nobis voluptatem iure sint
            ipsum!
          </p>
        </div>
        <div className="footer-nav container">
          <Link to="/" className="footer-logo">
            <i className="fas fa-broadcast-tower"></i>Asia Movie
          </Link>
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
            <li>
              <a href="https://github.com/pepe1113">Contact</a>
            </li>
          </ul>
          <p className="copyright-statement">
            © PeiHsin Wang source code 非商業使用
            <a href="https://www.themoviedb.org/"> The Movie Database</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
