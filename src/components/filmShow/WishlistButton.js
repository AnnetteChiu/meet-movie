import React from 'react'
import { connect } from 'react-redux'
import { add_wish, delete_wish } from '../../actions'

const WishlistStyle = {
  display: 'block',
  marginTop: '10px',
}

class WishlistButton extends React.Component {
  state = {
    isWishList: false,
  }

  onButtonClick = () => {
    if (this.props.isWishlist) {
      this.props.delete_wish(this.props.id)
    } else {
      const film = {
        filmId: this.props.film.id,
        title: this.props.film.title || this.props.film.name,
        poster_path: this.props.film.poster_path,
        backdrop_path: this.props.film.backdrop_path,
        media_type: this.props.mediaType,
      }
      this.props.add_wish(film)
    }
  }

  render() {
    return (
      <button
        className={`ui inverted button ${this.props.isWishlist && 'active green'}`}
        onClick={this.onButtonClick}
        style={WishlistStyle}
      >
        <i className="heart icon"></i>
        {this.props.isWishlist ? 'Wishlisted' : 'Add to Wishlist'}
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  const id = state.film.film_detail.id
  const wishlist = state.wishlist.wishlist
  const isWishlist = state.wishlist.wishlist.some((i) => i.filmId === id)
  return {
    id,
    wishlist,
    isWishlist,
  }
}

export default connect(mapStateToProps, { add_wish, delete_wish })(WishlistButton)
