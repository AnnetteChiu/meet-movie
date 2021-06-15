import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import filmReducer from './filmsReducer'

export default combineReducers({
  auth: authReducer,
  film: filmReducer,
  form: formReducer,
})
