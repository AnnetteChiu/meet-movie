import { GET_VOTING_MOVIE } from '../actions/types'

const randomReducer = (state = [], action) => {
  switch (action.type) {
    case GET_VOTING_MOVIE:
      return [...state, ...action.payload]

    default:
      return state
  }
}

export default randomReducer
