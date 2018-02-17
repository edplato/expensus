import { combineReducers } from 'redux'
import State from '../../../types/state/index'
import auth from './auth'
import user from './user'

export default combineReducers<State>({
  auth,
  user,
})
