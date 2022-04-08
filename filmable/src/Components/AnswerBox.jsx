import { useState } from "react";

//build input box
const AnswerBox = (props) => {
  const {randomId} = props;
  const {filmDb} = props;
  
  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [guessMessage, setGuessMessage] = useState("");

  const handleChange = (event) => {
    setGuess(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const filmIndex = randomId - 1;

    //logic of checking closeness of guess

    if (guess.toLocaleLowerCase() === filmDb[filmIndex].title && guessCount <= 2) {
      setGuessMessage("CORRECT");
      setGuessCount((currGuessCount) => currGuessCount + 1);
    } else if (guess.toLocaleLowerCase() !== filmDb[filmIndex].title && guessCount < 2){
      setGuessMessage("INCORRECT!");
      setGuessCount((currGuessCount) => currGuessCount + 1);
    } else if (guess.toLocaleLowerCase() !== filmDb[filmIndex].title && guessCount >= 2) {
      setGuessMessage("RAN OUT OF GUESSES")
      setGuessCount((currGuessCount) => currGuessCount + 1);
      setGuess("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Guess here!"
        value={guess}
        onChange={handleChange}
      />
      <input id="submit" type="submit" value="Submit" />
      <h2>{guessMessage}</h2>
      <h2>Guess Count: {guessCount}/3</h2>
    </form>
  );
};

export default AnswerBox;
