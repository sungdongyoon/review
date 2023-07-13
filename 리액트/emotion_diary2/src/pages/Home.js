import React from 'react';
import Editor from '../Components/Editor';

const Home = () => {
  return (
    <div>
      <Editor initData={{
        date: new Date().getTime(),
        emotionId: 1,
        content: "이전에 작성했던 일기",
      }} onSubmit={() => alert("hi")}/>
    </div>
  )
}

export default Home;
