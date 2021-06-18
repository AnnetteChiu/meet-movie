import React from 'react'
import { connect } from 'react-redux'
import { search_multi } from '../../actions'
import FilmList from '../filmSearch/FilmList'
import Loading from '../Loading'
import FilmListCard from '../filmSearch/FilmListCard'
import NoResult from '../NoResult'

class FilmSearch extends React.Component {
  componentDidMount() {
    this.props.search_multi(this.props.match.params.searchKey)
  }

  componentDidUpdate() {
    this.renderCard()
  }

  renderCard() {
    if (!this.props.searchResult) {
      return <Loading />
    }

    return this.props.searchResult.map((film) => {
      return <FilmListCard film={film} media={film.media_type} key={film.id} />
    })
  }

  render() {
    return (
      <div className="container filmList">
        <p className="filmList-title">
          Search Result <span className="mark">{this.props.search}</span>
        </p>
        {!this.props.searchResult || this.props.searchResult.length === 0 ? <NoResult /> : ''}
        <FilmList>{this.renderCard()}</FilmList>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { searchResult: state.film.search_multi, search: ownProps.match.params.searchKey }
}
export default connect(mapStateToProps, { search_multi })(FilmSearch)
