import React from 'react';
import {useSelector} from 'react-redux';

const LittleBox = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      This is LittleBox!{count}
    </div>
  )
}

export default LittleBox;
