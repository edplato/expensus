import { User } from '../../server/db/entities/User'

type UserState = Pick<User, 'firstName' | 'lastName' | 'email'>
export default UserState
