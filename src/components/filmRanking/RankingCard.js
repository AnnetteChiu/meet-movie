import _, { replace } from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const imgUrl = 'https://image.tmdb.org/t/p/w500'

const Vote = styled.div`
  min-width: 100px;
`

const RankingCard = ({ film, index, mediaType }) => {
  const title = film.title ? film.title : film.name
  const date = film.release_date ? film.release_date.replace(/-/g, ' / ') : '--'
  const overview = _.truncate(film.overview, {
    length: 150,
    separator: ' ',
    omission: '...',
  })

  return (
    <li className="rankingCard">
      <Link to={`/show/${mediaType}/${film.id}`} className="rankingCard-img">
        <img src={imgUrl + film.poster_path} alt={title} />
      </Link>
      <div className="rankingCard-body">
        <Link to={`/show/${mediaType}/${film.id}`} className="rankingCard-title">
          <span>{`${index + 1}. `}</span>
          {title}
        </Link>
        <p className="ranking-subtitle">{`release: ${date}`}</p>
        <p className="ranking-description">{overview}</p>
      </div>
      <Vote>
        <div className="ui red  image label big">
          <i className="thumbs up icon" style={{ marginRight: '0' }}></i>
          <div className="detail">{film.vote_average * 10}</div>
        </div>
      </Vote>
    </li>
  )
}

export default RankingCard
