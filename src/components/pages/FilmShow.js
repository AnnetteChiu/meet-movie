import React from 'react'
import { connect } from 'react-redux'
import { get_film, clear_filmDetail } from '../../actions'
import FilmDetail from '../filmShow/FilmDetail'
import BackgroundImage from '../filmShow/BackgroundImage'
import Loading from '../Loading'

class FilmShow extends React.Component {
  componentDidMount() {
    const media = this.props.match.params.media_type
    const id = this.props.match.params.id
    this.props.get_film(media, id)
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    this.renderFilmDetail()
  }

  componentWillUnmount() {
    this.props.clear_filmDetail()
  }

  renderFilmDetail() {
    if (!this.props.film) {
      return <Loading />
    }

    return (
      <React.Fragment>
        <BackgroundImage
          imgUrl={this.props.film.backdrop_path}
          imgCaption={this.props.film.title ? this.props.film.title : this.props.film.name}
        />
        <FilmDetail film={this.props.film} mediaType={this.props.match.params.media_type} />
      </React.Fragment>
    )
  }

  render() {
    return <React.Fragment>{this.renderFilmDetail()}</React.Fragment>
  }
}

const mapStateToProps = (state) => {
  return { film: state.film.film_detail }
}

export default connect(mapStateToProps, { get_film, clear_filmDetail })(FilmShow)

// this.props.match.params.id
