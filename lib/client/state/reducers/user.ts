import { createReducer } from 'redux-act'
import State from '../../../types/state'
import { user as defaultState } from '../defaultState'

const userReducer = createReducer<State['user']>({}, defaultState)
export default userReducer
