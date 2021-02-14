import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './type';
import axios from 'axios';
import { APIKey } from '../APIKey';
import store from "../store"
export const searchMovie = text => {
  return store.dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};
//http://www.omdbapi.com/?apikey=[yourkey]&


export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};