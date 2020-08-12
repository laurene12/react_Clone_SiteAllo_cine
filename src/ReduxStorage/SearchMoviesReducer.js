const initialState = {
  movieSearch: "",
};
export const searchMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        movieSearch: action.payload,
      };
    default:
      return state;
  }
};
