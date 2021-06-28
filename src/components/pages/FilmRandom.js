import React from 'react'
import { connect } from 'react-redux'
import { get_voting_movie } from '../../actions'
import 'pure-css-loader'

import TabBtn from '../filmRandom/TabBtn'
import TabFilter from '../filmRandom/TabFilter'
import TabRandom from '../filmRandom/TabRandom'
import ResultFilter from '../filmRandom/ResultFilter'
import ResultRandom from '../filmRandom/ResultRandom'

class FilmRandom extends React.Component {
  state = {
    type: this.props.match.params.type,
    loader: false,
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.get_voting_movie(1)
    this.props.get_voting_movie(2)
    this.props.get_voting_movie(3)
    this.props.get_voting_movie(4)
  }

  // click TabBtn to change type
  onTabClick = (type) => {
    this.setState({ type: type })
  }

  handleActive = (type) => {
    return this.state.type === type ? true : false
  }

  // 隨機數字變random影片
  handleRandomList() {
    const { randomFilms, numbers } = this.props
    if (randomFilms && numbers) {
      let arr = []
      numbers.forEach((num) => {
        arr.push(randomFilms[num])
      })
      return arr
    }
  }

  // 渲染結果資料
  renderResult = () => {
    if (this.state.type === 'filter') {
      if (!this.props.filterFilms) return
      return <ResultFilter films={this.props.filterFilms} />
    } else {
      if (!this.props.numbers) return
      return <ResultRandom films={this.handleRandomList()} />
    }
  }

  // loader 放入random或filter button
  loaderTimer = () => {
    this.setState({ loader: true })
    setTimeout(() => {
      this.setState({ loader: false })
    }, 1500)
  }

  render() {
    return (
      <div className="container filmRandom">
        <div
          className={`loader loader-border ${this.state.loader ? 'is-active' : ''}`}
          data-text="Finding Films..."
          data-blink
        ></div>
        <h1>Find A Series...</h1>
        <div className="filmRandom-searchBar">
          <ul className="tabBtnList">
            <TabBtn
              label="By Filter"
              onTabClick={() => this.onTabClick('filter')}
              active={this.handleActive('filter')}
            />
            <TabBtn
              label="By Random"
              onTabClick={() => this.onTabClick('random')}
              active={this.handleActive('random')}
            />
          </ul>
          <div className="tab">
            {this.state.type === 'filter' ? (
              <TabFilter loaderTimer={this.loaderTimer} />
            ) : (
              <TabRandom loaderTimer={this.loaderTimer} />
            )}
          </div>
        </div>
        <div className="filmRandom-results">{this.renderResult()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    randomFilms: state.vote,
    filterFilms: state.film.filter,
    numbers: state.film.random_numbers,
  }
}
export default connect(mapStateToProps, { get_voting_movie })(FilmRandom)
