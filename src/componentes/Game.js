import "./Game.css";
const Game = ({verifyLetter, pickedWord, pickedCategory, letter, guessedLetters, wrongLetters, guesses, score, }) => {
  return (
  <div className="game">
      <p className="points">  
        <span> Pontuação: {score} </span>
      </p>
      <h1> Adivinhe a palavra:</h1>
      <h3 className="tip"> 
        Dica sobre a palavra: <span>Dica... </span>
      </h3>
    <div className="wordContainer">
        <span className="letter"> {letter} </span>  
        <span className="blankSquare"> </span>
    </div>
    <div className="lettercontainer">
      <p> Tente adivinhar uma letra da palavra: </p>
      <form> 
       <input type="text" name="letter" maxLength="1" required/> 
       <button>Jogar!</button>  
      </form>
    </div>
    <div className="wrongLettersContainer"> 
        <p>Letras já utilizadas: </p>
        <span> a,</span>
        <span> b, </span> 
    </div>
  </div> 
  )
}

export default Game