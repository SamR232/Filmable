import { useState } from "react";

const AnswerBox = (props) => {
  const { randomId } = props;
  const { filmDb } = props;

  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [guessMessage, setGuessMessage] = useState("");
  const [showButton, setShowButton] = useState();
  const [showAnswer, setShowAnswer] = useState("");

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const filmIndex = randomId - 1;
    const filmTitle = filmDb[filmIndex].title;
    //logic of checking closeness of guess

    if (
      guess.toLocaleLowerCase() === filmDb[filmIndex].title &&
      guessCount <= 2
    ) {
      setGuessMessage("CORRECT!");
      setGuessCount((currGuessCount) => currGuessCount + 1);
      setShowButton(<button>Give me another Filmable!</button>);
    } else if (
      guess.toLocaleLowerCase() !== filmDb[filmIndex].title &&
      guessCount < 2
    ) {
      setGuessMessage("INCORRECT!");
      setGuessCount((currGuessCount) => currGuessCount + 1);
    } else if (
      guess.toLocaleLowerCase() !== filmDb[filmIndex].title &&
      guessCount >= 2 &&
      guessCount < 3
    ) {
      setGuessMessage("RAN OUT OF GUESSES!");
      setGuessCount((currGuessCount) => currGuessCount + 1);
      setGuess();
      setShowAnswer(<h2>The correct answer was: {filmTitle.toUpperCase()}</h2>);
      setShowButton(<button>Give me another try!</button>);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guess here!"
          value={guess}
          onChange={handleChange}
          required
        />
        <input id="submit" type="submit" value="Submit" />
        <h2>Guess Count: {guessCount}/3</h2>
        <h2>{guessMessage}</h2>
      </form>
      <form>
        <div> {showAnswer}</div>
        <p>{showButton}</p>
      </form>
    </>
  );
};

export default AnswerBox;
