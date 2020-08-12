import { createStore, combineReducers, applyMiddleware } from "redux";
import { searchMovieReducer } from "./SearchMoviesReducer";
import Thunk from "redux-thunk";

const racineReducer = combineReducers({ dataMovies: searchMovieReducer });

export const Store = createStore(racineReducer, applyMiddleware(Thunk));
