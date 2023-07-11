import React from 'react';
import {useSelector} from 'react-redux';
import LittleBox from './LittleBox';

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>This is Box!{count}</div>
      <LittleBox/>
    </div>
  )
}

export default Box;
