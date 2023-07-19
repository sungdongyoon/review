import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import MovieCard from '../Components/MovieCard';

const Movies = () => {
  const movieTitle = useSelector((state) => state.movie);
  console.log("무비타이틀", movieTitle)
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, genreList} = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // console.log("dd", popularMovies)
  let allMovies = [
    {...popularMovies},
    {...topRatedMovies},
    {...upComingMovies},
  ]
  console.log("전체영화",allMovies);
  const searchMovieTitle = (e) => {
    setSearchMovie(e.target.value)
    dispatch({type: "SEARCH_TITLE", payload: {searchMovie}})
  }
  useEffect(() => {
    if(searchMovie !== "") {
      let list = allMovies.map((it) => it.results.filter((item) => item.title.includes(searchMovie)))
      setSearchMovie(list)
    } else {
      setSearchMovie(movieTitle);
    }
  }, [])
  return (
    <div className="Movies">
      <h1>검색하기</h1>
      <input onChange={searchMovieTitle} value={searchMovie} className='movieSearch' type='text' placeholder='원하시는 작품을 검색해보세요'/>
      <div className="movie_item" >
        {allMovies.map((it) => (
          it.results.map((item) => (
            <MovieCard item={item}/>
          ))
        ))}
      </div>
    </div>
  )
}

export default Movies;
