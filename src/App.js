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
  const [words] = useState(wordsList)

  console.log(words)

  return (
    <div className="App">
    {gameStage=== "start" && <StartScreen/>}
    {gameStage=== "game" && <StartScreen/>}
    {gameStage=== "end" && <StartScreen/>}
    </div>
  );
}

export default App;
