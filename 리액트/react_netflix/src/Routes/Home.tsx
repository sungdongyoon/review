import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getMovies, IGetMovieResult } from '../api';
import { useNavigate, useMatch, PathMatch } from 'react-router-dom';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { motion, AnimatePresence } from 'framer-motion';

const Wrapper = styled.div`
  background: #000;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{bgPhoto: string}>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('${(props) => props.bgPhoto}');
  background-size: cover;
`;

const Slider = styled.div`
  width: 100%;
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
`;

const Box = styled(motion.div)<{bgPhoto: string}>`
  height: 200px;
  background-color: #fff;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  &:first-child {
    transform-origin: left;
  }
  &:last-child {
    transform-origin: right;
  }
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  width: 50%;
  font-size: 30px;
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;


// 애니메이션 변수

const rowVariants = {
  hidden: {
    opacity: 0,
    x: window.innerWidth + 5,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -window.innerWidth - 5,
  },
}

const boxVarants = {
  normal: {
    scale: 1
  },
  hover: {
    zIndex: 99, 
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      type: "tween",
      duration: 0.3
    },
  },
}

const infoVarants = {
  start: {
    opacity: 0
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "tween",
      duration: 0.3
    }
  }
}


// 한 번에 보여주고 싶은 영화의 수
const offset = 6;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMovieResult>(["movies", "nowPlaying"], getMovies);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if(data) {
      if(leaving) return;
      toggleLeaving();
      const totlaMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totlaMovies / offset) - 1;
      setIndex(index === maxIndex ? 0 : (index + 1));
    }
  };
  const toggleLeaving = () => {
    setLeaving(!leaving);
  }

  const history = useNavigate();
  const bigMovieMatch: PathMatch<string> | null = useMatch('/movies/:movieId');
  console.log(bigMovieMatch);
  const onBoxClient = (movieId: number) => {
    history(`/movies/${movieId}`);
  }

  const onOverlayClick = () => {
    history('/');
  };
  return (
    <Wrapper>
      {isLoading ? (<Loader>Loading...</Loader>) : 
      (<>
        <Banner onClick={increaseIndex} bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
          <Title>{data?.results[0].title}</Title>
          <Overview>{data?.results[0].overview}</Overview>
        </Banner>
        <Slider>
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
            <Row
            key={index}
            variants={rowVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{type: "tween", duration: 1}}>
              {data?.results.slice(1).slice(offset * index, offset * index + offset).map((it) => (
                <Box
                key={it.id}
                layoutId={it.id + ""}
                onClick={() => onBoxClient(it.id)}
                variants={boxVarants}
                whileHover="hover"
                initial="normal"
                transition={{type: "tween"}}
                bgPhoto={makeImagePath(it.backdrop_path, 'w500')}>
                  <Info variants={infoVarants}>
                    <h4>{it.title}</h4>
                  </Info>
                </Box>
              ))}
            </Row>
          </AnimatePresence>
        </Slider>
        <AnimatePresence>
          {bigMovieMatch &&
            <>
              <Overlay onClick={onOverlayClick} animate={{opacity: 1}} exit={{opacity: 0}}/>
              <motion.div layoutId={bigMovieMatch.params.movieId} style={{
                position: "absolute",
                width: "40vw",
                height: "80vh",
                backgroundColor: "red",
                top: 50,
                left: 0,
                right: 0,
                margin: "0 auto",
              }}/>
            </>
          }
        </AnimatePresence>
      </>)}
    </Wrapper>
  )
}

export default Home;
