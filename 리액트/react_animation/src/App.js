import './App.css';
import { styled } from 'styled-components';
import { motion, useMotionValue, useTransform, useViewportScroll, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from 'react';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child, div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  // width: 200px;
  height: 200px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


// 애니메이션 변수
const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition: {type: 'spring', delay: 0.5}},
};

const boxVariant = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.5,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const circleVariant = {
  start: {
    opacity: 0,
    y: 30,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};

const eventVariant = {
  hover: {
    scale: 1.5,
    rotateZ: 180,
  },
  click: {
    scale: 0.5,
    borderRadius: '50%',
  },
  drag: {
    backgroundColor: 'rgba(255, 0, 255, 0.5)',
  },
}

function App() {
  // const x = useMotionValue(0);
  // const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  // const gradient = useTransform(x, [-800, 0, 800], [
  //   "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
  //   "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
  //   "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))"
  // ])
  // const {scrollYProgress} = useViewportScroll();
  // useEffect(() => {
  //   scrollY.onChange(() => console.log(scrollY.get(), scrollYProgress.get()));
  // }, [scrollY, scrollYProgress]);
  // const [showing, setShowing] = useState(false);
  // const toggleShowing = () => {
  //   setShowing((prev) => !prev);
  // };
  const [clicked, setClicked] = useState(false);
  const toggle = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggle}>
      <Grid>
        <Box layoutId="hello"/>
        <Box/>
        <Box/>
        <Box/>
      </Grid>
      <AnimatePresence>
        {clicked ? <Overlay initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}><Box layoutId="hello" style={{width: 600, height: 300}}/></Overlay> : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
