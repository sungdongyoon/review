import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo, faStar } from '@fortawesome/free-solid-svg-icons';
import { movieAction } from '../redux/actions/movieAction';
import { useSelector, useDispatch } from 'react-redux';

const MovieDetail = () => {
  const item = useLocation();
  const {id} = useParams();
  const itemInfo = item.state.value.item;
  const genres = itemInfo.genre_ids;
  const genresArr = item.state.genreList.genreList;
  // console.log("genresArr", genresArr);
  // console.log("movieData", itemInfo);
  console.log("아이템", item)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  const {popularMovies} = useSelector((state) => state.movie);
  console.log("ddd",popularMovies)
  const navigate = useNavigate();
  const goPrevDetail = () => {
    navigate(-1);
  }
  return (
    <div className='Movie_detail' style={{backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${itemInfo.poster_path}` + ')'}}>
      <button onClick={goPrevDetail} className='backBtn'>{"<"}</button>
      <div className='detail_content'>
        {genres.map((id) => (
          <span key={id} className='detail_genre'>
            {genresArr.find((item) => item.id === id).name}
          </span>
        ))}
        <h1 className='detail_title'>{itemInfo.title}</h1>
        <div className='detail_info'>
          <span className='detail_release'>{itemInfo.release_date.slice(0, 4)}</span>
          <span className='detail_vote'>
            <FontAwesomeIcon icon={faStar} style={{marginRight: 10, color: "yellow"}}/>
            {itemInfo.vote_average} ({itemInfo.vote_count})
          </span>
          {itemInfo.adult ? <span className='detail_adult'>청소년 관람 불가</span> : ""}
        </div>
        <p className='detail_overview'>{itemInfo.overview}</p>
        <div className='detail_buttons'>
          <button className='play_btn'>
            <FontAwesomeIcon icon={faPlay} style={{marginRight: 20}}/>
            재생하기
          </button>
          <button className='more_btn'>
            <FontAwesomeIcon icon={faCircleInfo} style={{marginRight: 20}}/>
            상세정보
          </button>
        </div>
      </div>
      {/* <MovieSlide movies={popularMovies}/> */}
    </div>
  )
}

export default MovieDetail;
