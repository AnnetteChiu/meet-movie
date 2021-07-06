import React from 'react'
import { Link } from 'react-router-dom'

import { movieGenres } from '../data/genres'

const imgUrl = 'https://image.tmdb.org/t/p/w342'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

const ResultFilter = ({ films }) => {
  const renderCard = () => {
    return films.map((film) => {
      const poster = film.poster_path ? imgUrl + film.poster_path : noPoster
      const title = film.title
      const genre = movieGenres.filter((genre) => genre.id === film.genre_ids[0])[0].name

      return (
        <li key={film.id}>
          <Link to={`/show/movie/${film.id}`} className="card">
            <div className="dark-hover">
              <img className="img-hover" src={poster} alt={title} />
            </div>
            <p className="card-title">{title}</p>
            <span className="card-description">{genre}</span>
          </Link>
        </li>
      )
    })
  }

  return <ul className="filmList-body">{renderCard()}</ul>
}

export default ResultFilter
