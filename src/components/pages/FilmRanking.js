import React from 'react'

import bgImg from '../../images/bg-img.jpg'
import MovieRanking from '../filmRanking/MovieRanking'
import TvRanking from '../filmRanking/TvRanking'

class FilmRanking extends React.Component {
  state = { type: 'movie' }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  renderActive = (type) => {
    if (this.state.type === type) {
      return 'active'
    } else {
      return null
    }
  }

  onButtonClick = (type) => {
    this.setState({ type })
  }

  render() {
    return (
      <>
        <div className="bg-img around-gradient">
          <img className="blur" src={bgImg} alt="background" />
        </div>
        <div className="container filmRanking">
          <h1>Top 100</h1>
          <div className="ui buttons" style={{ marginBottom: '30px' }}>
            <button
              className={`ui button inverted red ${this.renderActive('movie')}`}
              onClick={() => this.onButtonClick('movie')}
            >
              MOVIE
            </button>
            <button
              className={`ui button inverted red ${this.renderActive('tv')}`}
              onClick={() => this.onButtonClick('tv')}
            >
              TV SHOW
            </button>
          </div>
          {this.state.type === 'movie' ? <MovieRanking /> : <TvRanking />}
        </div>
      </>
    )
  }
}

export default FilmRanking
