import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { get_popular_movie } from '../../actions'

import RankingCard from './RankingCard'
import Loading from '../Loading'

class MovieRanking extends React.Component {
  state = {
    page: 1,
    films: [],
    hasMore: true,
  }
  componentDidMount() {
    this.props.get_popular_movie(1)
  }

  componentDidUpdate() {
    if (!this.state.films.length) {
      this.setState({ films: this.props.films })
      this.renderRanking()
    }
  }

  FetchData = () => {
    //限制100筆
    if (this.state.films.length >= 81) {
      this.setState({ hasMore: false })
      return
    }

    this.setState({ page: this.state.page + 1 })
    this.props.get_popular_movie(this.state.page)
    setTimeout(() => {
      this.setState({ films: [...this.state.films, ...this.props.films] })
    }, 500)
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
    return <ul className="ranking">{this.renderScroll()}</ul>
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.film.popular_movie,
  }
}

export default connect(mapStateToProps, { get_popular_movie })(MovieRanking)
