import AuthState from '../../types/state/auth'
import State from '../../types/state/index'
import UserState from '../../types/state/user'

export const auth: AuthState = {
  apiToken: '',
}

export const user = null

const defaultState: State = {
  auth,
  user,
}

export default defaultState
