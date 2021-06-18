import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { movieGenres, tvGenres } from '../data/genres'
const imgUrl = 'https://image.tmdb.org/t/p/original'

const SlideCard = ({ film }) => {
  const title = film.title ? film.title : film.name

  const renderGenre = (genre_ids) => {
    let genreStr = ''
    genre_ids.forEach((genreId) => {
      if (film.media_type === 'movie') {
        genreStr += movieGenres.filter((i) => i.id === genreId)[0].name + '・'
      } else {
        genreStr += tvGenres.filter((i) => i.id === genreId)[0].name + '・'
      }
    })
    return genreStr
  }

  const renderContent = (txt) => {
    return _.truncate(txt, {
      length: 100,
      separator: ' ',
      omission: '...',
    })
  }

  return (
    <Link
      to={`/show/${film.media_type}/${film.id}`}
      style={{ backgroundImage: `url(${imgUrl + film.backdrop_path})` }}
      className="topSlider-card around-gradient"
    >
      <div className="above-gradient">
        <h2 className="topSlider-title">{title}</h2>
        <p className="topSlider-subtitle">{renderGenre(film.genre_ids)}</p>
        <p className="topSlider-content">{renderContent(film.overview)}</p>
      </div>
    </Link>
  )
}

export default SlideCard
