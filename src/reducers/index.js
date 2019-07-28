import { combineReducers } from 'redux';
import AquarelleReducer from './aquarelleReducer';
import UserReducer from './userReducer';

const reducers = {
  aquarelleStore: AquarelleReducer,
  userStore: UserReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
