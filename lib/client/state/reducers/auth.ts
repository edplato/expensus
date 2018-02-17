import { createReducer } from 'redux-act'
import State from '../../../types/state'
import { auth as defaultState } from '../defaultState'

const authReducer = createReducer<State['auth']>({}, defaultState)
export default authReducer
