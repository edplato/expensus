import AuthState from './auth'
import UserState from './user'

export default interface State {
  readonly auth: AuthState
  readonly user: UserState | null
}
