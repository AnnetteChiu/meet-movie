import React from 'react'
import { Link } from 'react-router-dom'
const imgUrl = 'https://image.tmdb.org/t/p/w342'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

const FilmListCard = ({ film, media }) => {
  const poster = film.poster_path ? imgUrl + film.poster_path : noPoster
  const title = film.title ? film.title : film.name

  return (
    <li>
      <Link to={`/show/${media}/${film.id}`} className="card">
        <div className="dark-hover">
          <img className="img-hover" src={poster} alt={title} />
        </div>
        <p className="card-title">{title}</p>
      </Link>
    </li>
  )
}

export default FilmListCard
