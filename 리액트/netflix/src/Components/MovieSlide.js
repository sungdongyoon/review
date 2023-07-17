import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MovieSlide = ({movies}) => {
  console.log(movies)
  return (
    <div>
      <Carousel responsive={responsive}>
        {movies.results.map((it, idx) => (
          <div className='poster_wrap'>
            <div className='poster_img' key={idx} style={{backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${it.backdrop_path})`}}></div>
          </div>
        ))}
        {/* <div className='poster_img'>
          <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${it.poster_path}`}/>
        </div> */}
      </Carousel>
    </div>
  )
}

export default MovieSlide;
