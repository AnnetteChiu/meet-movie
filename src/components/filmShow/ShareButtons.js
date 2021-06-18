import React from 'react'
import { EmailShareButton, TwitterShareButton, FacebookShareButton, LineShareButton } from 'react-share'
import { EmailIcon, TwitterIcon, FacebookIcon, LineIcon } from 'react-share'

const buttonStyle = {
  marginRight: '5px',
}

const ShareButtons = ({ title }) => {
  const url = window.location.href
  return (
    <div className="shareBtns">
      <FacebookShareButton
        url={url}
        hashtag="Asian Film!"
        quote={`I wonder share you a AWESOME FILM!!! ${title}`}
        style={buttonStyle}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} hashtags={['AsianFilm']} style={buttonStyle} title={`AsianFilm-${title}`}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <LineShareButton url={url} style={buttonStyle} title={`AsianFilm-${title}`}>
        <LineIcon size={40} round={true} />
      </LineShareButton>
      <EmailShareButton url={url} style={buttonStyle} subject={`AsianFilm-${title}`}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
    </div>
  )
}

export default ShareButtons
