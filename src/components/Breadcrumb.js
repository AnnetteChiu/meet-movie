import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ currentPage }) => {
  return (
    <div className="breadcrumb">
      <Link to="/">Browser All</Link>
      <span className="fas fa-chevron-right fa-xs"></span>
      <p className="active">{currentPage}</p>
    </div>
  )
}

export default Breadcrumb
