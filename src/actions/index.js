import _ from 'lodash'
import mdb from '../api/themoviedb'
import {
  SIGN_IN,
  SIGN_OUT,
  GET_POPULAR_MOVIE,
  GET_POPULAR_TV,
  GET_TRENDING,
  SEARCH_MULTI,
  SEARCH_MOVIE_FILTER,
  GET_FILM,
  CLEAR_FILMDETAIL,
  GET_VOTING_MOVIE,
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

export const get_popular_movie = (page) => async (dispatch) => {
  _get_popular_movie(page, dispatch)
}

const _get_popular_movie = _.memoize(async (page, dispatch) => {
  const response = await mdb.get('/discover/movie', {
    params: {
      sort_by: 'popularity.desc',
      page,
    },
  })
  dispatch({
    type: GET_POPULAR_MOVIE,
    payload: response.data.results,
  })
})

export const get_popular_tv = (page) => async (dispatch) => {
  _get_popular_tv(page, dispatch)
}

const _get_popular_tv = _.memoize(async (page, dispatch) => {
  const response = await mdb.get('/discover/tv', {
    params: { page },
  })
  dispatch({
    type: GET_POPULAR_TV,
    payload: response.data.results,
  })
})

export const get_trending = () => async (dispatch) => {
  _get_trending(dispatch)
}

const _get_trending = _.memoize(async (dispatch) => {
  const response = await mdb.get('/trending/all/week')
  dispatch({
    type: GET_TRENDING,
    payload: response.data.results,
  })
})

export const search_multi = (inputValue) => async (dispatch) => {
  const response = await mdb.get('/search/multi', {
    params: { query: escape(inputValue) },
  })
  dispatch({
    type: SEARCH_MULTI,
    payload: response.data.results,
  })
  history.push(`/search/${inputValue}`)
}

// 搜尋種類和國家
export const search_movie_filter = (language, genreId) => async (dispatch) => {
  const response = await mdb.get('/discover/movie', {
    params: {
      with_genres: genreId,
      with_original_language: language,
    },
  })
  dispatch({
    type: SEARCH_MOVIE_FILTER,
    payload: response.data.results,
  })
}

export const get_film = (mediaType, id) => async (dispatch) => {
  const response = await mdb.get(`/${mediaType}/${id}`, {
    params: {
      append_to_response: 'videos,credits',
    },
  })
  dispatch({
    type: GET_FILM,
    payload: response.data,
  })
}

export const clear_filmDetail = () => {
  return {
    type: CLEAR_FILMDETAIL,
  }
}

export const get_voting_movie = (page) => async (dispatch) => {
  _get_voting_movie(page, dispatch)
}

const _get_voting_movie = _.memoize(async (page, dispatch) => {
  const response = await mdb.get('/discover/movie', {
    params: {
      sort_by: 'vote_average.desc',
      page,
    },
  })
  dispatch({
    type: GET_VOTING_MOVIE,
    payload: response.data.results,
  })
})
