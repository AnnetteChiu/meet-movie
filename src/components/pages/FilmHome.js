import React from 'react'
import { connect } from 'react-redux'
import { get_popular_movie, get_popular_tv } from '../../actions'

import TopSlider from '../filmHome/TopSlider'
import ToRandomButton from '../filmHome/ToRandomButton'
import FilmSlider from '../filmHome/FilmSlider'

class FilmHome extends React.Component {
  componentDidMount() {
    this.props.get_popular_movie(1)
    this.props.get_popular_tv(1)
  }

  componentDidUpdate() {
    this.renderFilmSlider()
  }

  renderFilmSlider() {
    if (!this.props.popular_movies && !this.props.popular_tvs) {
      return
    }
    return (
      <div className="container">
        <FilmSlider label="New release" media_type="" films={this.props.trending_films} />
        <FilmSlider label="Popular movie" media_type="movie" films={this.props.popular_movies} />
        <FilmSlider label="Popular TV show" media_type="tv" films={this.props.popular_tvs} />
      </div>
    )
  }

  render() {
    return (
      <React.Fragment>
        <TopSlider />
        <ToRandomButton />
        {this.renderFilmSlider()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trending_films: state.film.trending_films,
    popular_movies: state.film.popular_movie,
    popular_tvs: state.film.popular_tv,
  }
}

export default connect(mapStateToProps, { get_popular_movie, get_popular_tv })(FilmHome)
