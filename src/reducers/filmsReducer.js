import { GET_POPULAR_MOVIE, GET_POPULAR_TV, GET_TRENDING, SEARCH_MULTI, SEARCH_MOVIE_FILTER } from '../actions/types'

const filmReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TRENDING:
      return { ...state, trending_films: action.payload }
    case GET_POPULAR_MOVIE:
      return { ...state, popular_movie: action.payload }
    case GET_POPULAR_TV:
      return { ...state, popular_tv: action.payload }
    case SEARCH_MULTI:
      return { ...state, search_multi: action.payload }
    case SEARCH_MOVIE_FILTER:
      return { ...state, search_filter: action.payload }
    default:
      return state
  }
}

export default filmReducer
