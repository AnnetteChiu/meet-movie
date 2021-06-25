import { GET_WISHLIST, ADD_WISH, DELETE_WISH, CLEAR_WISHLIST } from '../actions/types'

const init_state = {
  userId: '',
  wishlist: [],
}

const wishlistReducer = (state = init_state, action) => {
  switch (action.type) {
    case GET_WISHLIST:
      return action.payload
    case CLEAR_WISHLIST:
      return {}
    case ADD_WISH:
      return { ...state, wishlist: [...state.wishlist, action.payload] }
    case DELETE_WISH:
      return { ...state, wishlist: state.wishlist.filter((i) => i.filmId !== action.payload) }

    default:
      return state
  }
}

export default wishlistReducer
