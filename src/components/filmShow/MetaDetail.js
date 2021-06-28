import React from 'react'

const MetaDetail = ({ text, label }) => {
  return (
    <div className="metaDetail">
      <h4>{label}</h4>
      <p>{text ? text : '-'}</p>
    </div>
  )
}

export default MetaDetail
