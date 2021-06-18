import React from 'react'

const baseUrl = 'https://image.tmdb.org/t/p/original'

const BackgroundImage = ({ imgUrl, imgCaption }) => {
  return (
    <div className="bg-img around-gradient">
      <img src={baseUrl + imgUrl} alt={imgCaption} />
    </div>
  )
}

export default BackgroundImage
