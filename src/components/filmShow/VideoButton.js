import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'

const VideoButton = ({ videoId }) => {
  const [toggler, setToggler] = useState(false)

  return (
    <>
      <button className="playBtn" onClick={() => setToggler(!toggler)}>
        <i className="fas fa-play"></i>Tralier
      </button>
      <FsLightbox toggler={toggler} sources={[`https://www.youtube.com/watch?v=${videoId}`]} />
    </>
  )
}

export default VideoButton
