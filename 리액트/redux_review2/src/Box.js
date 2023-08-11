import React from 'react';
import { useSelector } from 'react-redux';
import LittleBox from './LittleBox';

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      This is Box{count}
      <LittleBox/>
    </div>
  )
}

export default Box;
