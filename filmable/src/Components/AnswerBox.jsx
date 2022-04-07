import { useState } from "react";

//build input box
const AnswerBox = (props) => {
  const [guess, setGuess] = useState("");

  function handleSubmit(event) {
    console.log(guess);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Guess here!"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
      <input id="submit" type="submit" value="Submit" />
    </form>
  );
};

export default AnswerBox;
