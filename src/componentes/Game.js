import { useState,useRef } from "react";
import "./Game.css";
const Game = ({verifyLetter, pickedCategory, letter, pickedWord, score, guesses, wrongLetters, guessedLetters}) => {

  const [Letter, setLetter] = useState("");
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter (Letter);

    setLetter("");
    letterInputRef.current.focus()
  };


  return (
  <div className="game">
      <p className="points">  
        <span> Pontuação: {score}</span>
      </p>
      <h1> Adivinhe a palavra:</h1>
      <h3 className="tip"> 
        Dica sobre a palavra: <span> {pickedCategory} </span>
      </h3>
      <p> Você ainda tem {guesses} tentativa(s). </p>
    <div className="wordContainer">



        {letter.map((letter, i) => (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter"> {letter} </span>
        ) : (
            <span key={i} className="blankSquare"> </span>

           )

        ))}
    </div>
    <div className="lettercontainer">
      <p> Tente adivinhar uma letra da palavra: </p>
      <form onSubmit={handleSubmit}> 
       <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} 
       value={Letter}
       ref={letterInputRef} 
       /> 
       <button>Jogar!</button>  
      </form>
    </div>
    <div className="wrongLettersContainer"> 
        <p>Letras já utilizadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}> {letter}, </span>

        ))}
    </div>
  </div> 
  )
}

export default Game