import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';

const choice = {
  rock: {
    name: "rock",
    img: "https://imageio.forbes.com/specials-images/imageserve/dv424076/Boulder--Namibia--Africa/960x0.jpg?format=jpg&width=960"
  },
  scissor: {
    name: "scissor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Standard_household_scissors.jpg/1200px-Standard_household_scissors.jpg"
  },
  paper: {
    name: "paper",
    img: "https://www.collinsdictionary.com/images/thumb/paper_111691001_250.jpg?version=4.0.313"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice: any): any => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  }
  const judgement = (user, computer) => {
    console.log(user, computer);
    if(user.name === computer.name) {
      return "tie";
    } else if(user.name == "rock") return computer.name == "scissor" ? "win" : "lose";
    else if(user.name == "scissor") return computer.name == "paper" ? "win" : "lose";
    else if(user.name == "paper") return computer.name == "rock" ? "win" : "lose";
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    // console.log(itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length);
    // console.log("randomItem", randomItem);
    let final = itemArray[randomItem];
    // console.log(final)
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
