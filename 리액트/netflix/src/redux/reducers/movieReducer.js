let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  loading: true,
  genreList: [],
  searchMovie: "",
}

function movieReducer(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "GET_MOVIE_REQUEST":
        return {...state, loading: true};
    case "GET_MOVIE_SUCCESS":
      return {...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        genreList: payload.genreList,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return {...state, loading: false};
    case "SEARCH_TITLE":
      return {...state, searchMovie: payload.searchMovie};
    default:
      return {...state};
  }
}

export default movieReducer;