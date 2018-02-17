import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import State from '../../types/state'
import defaultState from './defaultState'
import reducer from './reducers'

const middlewares = [thunk]

export default function configureStore(): Store<State> {
  return createStore(
    reducer,
    defaultState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
}
