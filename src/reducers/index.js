import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import filmReducer from './filmsReducer'
import randomReducer from './randomReducer'
import wishlistReducer from './wishlistReducer'

export default combineReducers({
  auth: authReducer,
  film: filmReducer,
  vote: randomReducer,
  wishlist: wishlistReducer,
  form: formReducer,
})
