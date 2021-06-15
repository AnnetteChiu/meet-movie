import React from 'react'
import { Link } from 'react-router-dom'

const ToRandomButton = () => {
  return (
    <section className="container">
      <p className="findBanner-title">I want to find a series...</p>
      <div className="findBanner">
        <Link to="/random" className="random">
          By Random!
        </Link>
        <Link to="/random" className="filter">
          By Filter!
        </Link>
      </div>
    </section>
  )
}

export default ToRandomButton
