import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const imgUrl = 'https://image.tmdb.org/t/p/w500'
const noPoster = 'https://fakeimg.pl/500x750/?text=No%20Poster'

class Wishlist extends React.Component {
  componentDidUpdate() {
    this.renderList()
  }

  renderList() {
    const { wishlist } = this.props
    return wishlist.map((film) => {
      const id = film.filmId
      const title = film.title
      const image = film.poster_path ? imgUrl + film.poster_path : noPoster
      const mediaType = film.media_type === 'movie' ? 'Movie' : 'TV show'

      return (
        <li className="wishlist-card" key={id}>
          <Link className="card-img dark-hover" to={`/show/${film.media_type}/${id}`}>
            <img src={image} alt={title} />
          </Link>
          <p className="card-title">{title}</p>
          <span className="card-detail">{mediaType}</span>
        </li>
      )
    })
  }

  NoSignedIn() {
    return (
      <div className="alertBlock">
        <p className="alert">Please Sign in with Google account.</p>
        <img
          src="https://blush.design/api/download?shareUri=eJzAw591oWBGknxV&bg=1a1a1a&w=800&h=800&fm=png"
          alt="alert"
        />
      </div>
    )
  }

  render() {
    return (
      <div className="container wishlist">
        <h1 className="wishlist-title">My Wishlist</h1>
        {this.props.isSignedIn ? <ul className="wishlist-cardGroup">{this.renderList()}</ul> : this.NoSignedIn()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.wishlist,
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps)(Wishlist)
