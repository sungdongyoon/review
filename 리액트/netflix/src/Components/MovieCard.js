import React from 'react';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({item}) => {
  const {genreList} = useSelector((state) => state.movie);
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/movie/${item.id}`, {
      state: {
        value: {item},
        genreList: {genreList}
      }
    });
  }
  console.log(genreList)
  
  return (
    <div className='card'
    style={{backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.poster_path}` + ')'
  }} onClick={goDetail}>
      <div className='overlay'>
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id) => (
            <Badge bg='danger' key={id}>
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  )
}


export default MovieCard;
