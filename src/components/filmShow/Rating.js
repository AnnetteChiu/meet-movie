import React from 'react'

const style = {
  marginTop: '10px',
}

const Rating = ({ rate }) => {
  return (
    <div className="ui red  image label large" style={style}>
      <i className="thumbs up icon"></i>Rating
      <div className="detail">{rate}</div>
    </div>
  )
}

export default Rating
