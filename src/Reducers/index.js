
import { combineReducers } from 'redux';
import {movieReducer} from './moviesReducer';
import {users} from "./usersReducer"
export default combineReducers({
  movies: movieReducer,
  users:users
});