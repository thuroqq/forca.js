// CSS

import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// Data
import { wordsList } from './data/word';

// Components 
import StartScreen from './componentes/StartScreen';
import Game from './componentes/Game';
import GameOver from './componentes/GameOver'

const Stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];


function App() {
  const [gameStage, setGameStage] =useState(Stages[0].name);
  const [words] = useState(wordsList);
  console.log(words);

// states
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letter, setLetters] = useState([]);



// in game states 
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState (3);
  const [score, setScore ] = useState (0);


// start pag 2
  const startGame = () => { 
    setGameStage(Stages[1].name);

  }

  // processo d letter input
  const verifyLetter = () => {
    setGameStage(Stages[2].name);
  }
  
// restarts the game 
const retry = () => {
  setGameStage(Stages[0].name)

}
  
  return (
    <div className="App">
    {gameStage=== "start" && <StartScreen startGame={startGame} />}
    {gameStage=== "game" && ( <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord} 
      pickedCategory = {pickedCategory} 
      letter={letter}
      guessedLetters={guessedLetters}
      wrongLetters= {wrongLetters} 
      guesses ={guesses}
      score={score}
      />
      )}
    {gameStage=== "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
