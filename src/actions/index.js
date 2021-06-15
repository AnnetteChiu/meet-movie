import mdb from '../api/themoviedb'
import {
  SIGN_IN,
  SIGN_OUT,
  GET_POPULAR_MOVIE,
  GET_POPULAR_TV,
  GET_TRENDING,
  SEARCH_MULTI,
  SEARCH_MOVIE_FILTER,
} from './types'
import history from '../history'

export const sign_in = (userId, userName) => {
  return {
    type: SIGN_IN,
    payload: {
      userId,
      userName,
    },
  }
}

export const sign_out = () => {
  return {
    type: SIGN_OUT,
  }
}

// 電影人氣
export const get_popular_movie = (page) => async (dispatch) => {
  const response = await mdb.get('/discover/movie', {
    sort_by: 'popularity.desc',
    page,
  })
  dispatch({
    type: GET_POPULAR_MOVIE,
    payload: response.data.results,
  })
}

// 電視劇人氣
export const get_popular_tv = (page) => async (dispatch) => {
  const response = await mdb.get('/discover/tv', {
    page,
  })
  dispatch({
    type: GET_POPULAR_TV,
    payload: response.data.results,
  })
}

//周選片
export const get_trending = () => async (dispatch) => {
  const response = await mdb.get('/trending/all/week')
  dispatch({
    type: GET_TRENDING,
    payload: response.data.results,
  })
}

//電影搜尋
export const search_multi = (inputValue) => async (dispatch) => {
  const response = await mdb.get('/search/multi', {
    query: escape(inputValue),
  })
  dispatch({
    type: SEARCH_MULTI,
    payload: response.data.results,
  })
}

// 搜尋種類和國家
export const search_movie_filter = (language, genreId) => async (dispatch) => {
  const response = await mdb.get('/discover/movie', {
    with_genres: genreId,
    with_original_language: language,
  })
  dispatch({
    type: SEARCH_MOVIE_FILTER,
    payload: response.data.results,
  })
}
