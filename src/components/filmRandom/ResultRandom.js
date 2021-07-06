import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'

import { movieGenres } from '../data/genres'

const imgUrl = 'https://image.tmdb.org/t/p/w342'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

const ResultRandom = ({ films }) => {
  const renderCard = () => {
    return films.map((film) => {
      const poster = film.poster_path ? imgUrl + film.poster_path : noPoster
      const title = film.title
      const overview = _.truncate(film.overview, { length: 120, separator: ' ' })
      const genre = movieGenres.filter((genre) => genre.id === film.genre_ids[0])[0].name

      return (
        <Link className="card" to={`/show/movie/${film.id}`} key={film.id}>
          <div className="image">
            <img src={poster} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">
              <p>{genre}</p>
            </div>
            <div className="description">{overview}</div>
          </div>
        </Link>
      )
    })
  }

  return (
    <div className="randomCard">
      <div className="ui link cards">{renderCard()}</div>
    </div>
  )
}

export default ResultRandom
