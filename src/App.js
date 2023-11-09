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
 

// states
  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letter, setLetters] = useState("")


// in game states 
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState (3);
  const [score, setScore ] = useState (0);


  const pickWordAndCategory = () => {
    // pick a random category

    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    // pick a random word
    const word = words[category] [Math.floor(Math.random() * words[category].length)]
    console.log(word)
    return {word, category}
  }

// start pag game
  const startGame = () => { 
    //pick word and category 
    const {word, category } = pickWordAndCategory();
    // create an array of letters 
    let wordLetters = word.split ("")

    wordLetters= wordLetters.map((l) => l.toLowerCase())

    console.log (word, category) ;
    console.log (wordLetters);

    setGameStage(Stages[1].name);

    //fill states
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    

  }

  // processo d letter input
  const verifyLetter = (Letter) => {

    const normalizedLetter= Letter.toLowerCase()

    // check if letter has already been utilized

    if( 
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter) 
    ) { 
      return;
    }

    // push guessed letter or remove a guess
    if(letter.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) =>
     [...actualGuessedLetters, normalizedLetter,])
    } else {
      setWrongLetters((actualWrongLetters) =>
      [...actualWrongLetters,
        normalizedLetter,
      ]);
      //  reduces attempts 
      setGuesses((actualGuesses) => actualGuesses -1);

    }
  };
  
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);

  };
  
  useEffect(()=> {
    if(guesses <= 0) {
// reset all states
  clearLetterStates()
  setGameStage(Stages[2].name);
  }

  }, [guesses])

  // check win condition
  useEffect(()=> {
    const uniqueLetters = [... new Set(letter)];

    // win condition 
    if(guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));
      // restart game with new word
      startGame();
    }
  }, [guessedLetters]);


// restarts the game 
const retry = () => {
  setScore(0)
  setGuesses(3)

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
    {gameStage=== "end" && <GameOver score={score} retry={retry}/>}
    </div>
  );
}

export default App;
