import React, { useState } from "react";

function NumberButtons() {
  const [numbers, setNumber] = useState("");
  const [method, setMethod] = useState(null);

  const onNumberClicked = (event) => {
    let currentSymbol = event.currentTarget.textContent;
    let newNumbers = numbers + currentSymbol;
    let numberToCount = `${newNumbers}`;
    if (
      currentSymbol === "*" ||
      currentSymbol === "/" ||
      currentSymbol === "+" ||
      currentSymbol === "-"
    ) {
      setMethod(currentSymbol);
    }
    setNumber(numberToCount);
  };

  return (
    <div className="number-buttons">
      <button onClick={onNumberClicked}>1</button>
      <button onClick={onNumberClicked}>2</button>
      <button onClick={onNumberClicked}>3</button>
      <button onClick={onNumberClicked}>4</button>
      <button onClick={onNumberClicked}>5</button>
      <p>{numbers}</p>

      <p>{method}</p>

      <button onClick={onNumberClicked}>+</button>
      <button onClick={onNumberClicked}>-</button>
      <button onClick={onNumberClicked}>/</button>
      <button onClick={onNumberClicked}>*</button>

      {/* <p>{result}</p> */}
    </div>
  );
}

export default NumberButtons;
