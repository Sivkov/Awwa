import { combineReducers } from 'redux'
import { images } from './images'
import { mode } from './mode'

export const rootReducer = combineReducers({
  images,
  mode
})


