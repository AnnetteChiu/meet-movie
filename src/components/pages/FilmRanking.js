import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { get_popular_movie } from '../../actions'

import bgImg from '../../images/bg-img.jpg'
import Ranking from '../filmRanking/Ranking'
import RankingCard from '../filmRanking/RankingCard'
import Loading from '../Loading'

class FilmRanking extends React.Component {
  state = {
    page: 1,
    films: [],
    hasMore: true,
  }

  componentDidMount() {
    if (this.props.films) {
      this.setState({ films: this.props.films })
    }
    this.props.get_popular_movie(this.state.page)
  }

  componentDidUpdate() {
    if (!this.state.films.length) {
      this.setState({ films: this.props.films })
    }
    this.renderRanking()
  }

  FetchData = () => {
    if (this.state.films.length >= 81) {
      this.setState({ hasMore: false })
      return
    }

    this.setState({ page: this.state.page + 1 })
    this.props.get_popular_movie(this.state.page)
    this.setState({ films: [...this.state.films, ...this.props.films] })
  }

  renderRanking = () => {
    return this.state.films.map((film, index) => {
      return <RankingCard film={film} key={index} index={index} mediaType="movie" />
    })
  }

  renderScroll = () => {
    if (!this.state.films.length) {
      return <Loading />
    }

    return (
      <InfiniteScroll
        dataLength={this.state.films.length}
        next={this.FetchData}
        hasMore={this.state.hasMore}
        loader={<Loading />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {this.renderRanking()}
      </InfiniteScroll>
    )
  }

  render() {
    return (
      <>
        <div className="bg-img around-gradient">
          <img className="blur" src={bgImg} alt="background" />
        </div>
        <div className="container filmRanking">
          <h1>Top 100</h1>
          <Ranking>{this.renderScroll()}</Ranking>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.film.popular_movie,
  }
}

export default connect(mapStateToProps, { get_popular_movie })(FilmRanking)
