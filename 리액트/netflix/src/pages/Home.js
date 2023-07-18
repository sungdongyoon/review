import React, { useEffect, useState, CSSProperties } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Components/Banner';
import MovieSlide from '../Components/MovieSlide';
import ClipLoader from 'react-spinners/ClipLoader';

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector((state) => state.movie);
  console.log("home", popularMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  // loading이 true면 loading spinner를 보여주고
  // loading이 false면 데이터를 보여준다
  // true: 데이터 도착 전
  // false: 데이터 도착 후
  if(loading) {
    return (
      <div className='loader'>
        <ClipLoader color="#f00" loading={loading} size={150}/>
      </div>
    )
  }
  return (
    <div className='slide'>
      <Banner movie={popularMovies.results[0]}/>
      <div className='popular'>
        <h1>Popular Movie</h1>
        <MovieSlide movies={popularMovies}/>
      </div>
      <div className='topRated'>
        <h1>Top rated Movie</h1>
        <MovieSlide movies={topRatedMovies}/>
      </div>
      <div className='upcoming'>
        <h1>Upcoming Movie</h1>
        <MovieSlide movies={upComingMovies}/>
      </div>
    </div>
  )
}

export default Home;
