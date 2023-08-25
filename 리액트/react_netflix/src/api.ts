const API_KEY="ba26aa35ea02b8d0ee291838446f0eb2";
const BASE_PATH = "https://api.themoviedb.org/3";

// "https://api.themoviedb.org/3/movie/now_playing?api_key=ba26aa35ea02b8d0ee291838446f0eb2&language=en-US&page=1"

export interface IMovie {
  id: number;
  backdrop_path: "string";
  poster_path: "string";
  title: "string";
  overview: "string";
}

export interface IGetMovieResult {
  dates: {
    maximun: "string";
    minimun: "string";
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then((response) => response.json());
}
