import React from 'react'
import VideoButton from './VideoButton'
import ShareButtons from './ShareButtons'
import Breadcrumb from '../Breadcrumb'
import MetaDetail from './MetaDetail'
import Rating from './Rating'

const imgUrl = 'https://image.tmdb.org/t/p/w500'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

const FilmDetail = ({ film, mediaType }) => {
  const title = film.title ? film.title : film.name
  const year =
    mediaType === 'movie' ? new Date(film.release_date).getFullYear() : new Date(film.first_air_date).getFullYear()
  const runTime = mediaType === 'movie' ? changeRuntime(film.runtime) : `${film.episode_run_time[0]} M`
  const language = mediaType === 'movie' ? film.production_countries.name : film.production_countries[0].name
  const poster = film.poster_path ? imgUrl + film.poster_path : noPoster

  const genres = film.genres
    .map((i) => i.name)
    .toString()
    .replace(/,/g, '・')

  const directors = film.credits.crew
    .filter((crew) => {
      if (mediaType === 'movie') {
        return crew.department === 'Directing'
      } else {
        return crew.job === 'Executive Producer'
      }
    })
    .map((person) => person.original_name)
    .toString()
    .replace(/,/g, ' / ')

  const casting = film.credits.cast
    .map((person) => person.name)
    .splice(0, 6)
    .toString()
    .replace(/,/g, ' / ')

  function changeRuntime(runtime) {
    return `${Math.floor(runtime / 60)}H ${runtime % 60}M`
  }

  return (
    <div className="container filmShow">
      <Breadcrumb currentPage={film.title} />
      <div className="filmShow-main">
        <div className="filmShow-head">
          <img src={poster} alt={title} />
          <div className="filmShow-title">
            <h1>
              {title}
              <span>{` (${year})`}</span>
            </h1>
            <p>{genres}</p>
            <p>{runTime}</p>
            <p>{language}</p>
            <Rating rate={film.vote_average} />
          </div>
        </div>
        <div className="filmShow-body">
          <p>{film.overview}</p>
        </div>
        <MetaDetail text={directors} label="Director" />
        <MetaDetail text={casting} label="Cast" />
        <ShareButtons title={title} />
        {film.videos.results.length ? <VideoButton videoId={film.videos.results[0].key} /> : ''}
      </div>
    </div>
  )
}

export default FilmDetail
