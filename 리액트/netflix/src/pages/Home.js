import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies} = useSelector((state) => state.movie);
  console.log("home", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [])
  return (
    <div className='slide'>
      {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
      <h1>Popular Movie</h1>
      {popularMovies.results && <MovieSlide movies={popularMovies}/>}
      <h1>Top rated Movie</h1>
      {popularMovies.results && <MovieSlide movies={topRatedMovies}/>}
      <h1>Upcoming Movie</h1>
      {popularMovies.results && <MovieSlide movies={upComingMovies}/>}
    </div>
  )
}

export default Home;
