import React from 'react'

const labelStyle = {
  marginTop: '10px',
}

const iconStyle = {
  margin: '0',
}

const Rating = ({ rate }) => {
  return (
    <div className="ui red  image label large" style={labelStyle}>
      <i className="thumbs up icon" style={iconStyle}></i>
      <div className="detail">{rate}</div>
    </div>
  )
}

export default Rating
