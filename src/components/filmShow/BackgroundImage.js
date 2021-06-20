import React from 'react'

const baseUrl = 'https://image.tmdb.org/t/p/original'

const BackgroundImage = ({ imgUrl, imgCaption }) => {
  const imgPath = imgUrl ? baseUrl + imgUrl : ''
  return (
    <div className="bg-img around-gradient">
      <img src={imgPath} alt={imgCaption} />
    </div>
  )
}

export default BackgroundImage
