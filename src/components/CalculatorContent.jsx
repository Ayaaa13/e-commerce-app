import React, { useState } from "react";

const CalculatorContent = () => {
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };

  const reset = () => {
    setResult("");
  };

  const backSpace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} onChange={handleClick} />
      </form>

      <div className="calculatorBtns">
        <button name="7" className="btn" onClick={handleClick}>
          7
        </button>
        <button name="8" className="btn" onClick={handleClick}>
          8
        </button>
        <button name="9" className="btn" onClick={handleClick}>
          9
        </button>
        <button className="deleteBtn btn" onClick={backSpace}>
          DEL
        </button>

        <button name="4" className="btn" onClick={handleClick}>
          4
        </button>
        <button name="5" className="btn" onClick={handleClick}>
          5
        </button>
        <button name="6" className="btn" onClick={handleClick}>
          6
        </button>
        <button name="+" className="btn" onClick={handleClick}>
          +
        </button>
        <button name="1" className="btn" onClick={handleClick}>
          1
        </button>
        <button name="2" className="btn" onClick={handleClick}>
          2
        </button>
        <button name="3" className="btn" onClick={handleClick}>
          3
        </button>
        <button name="-" className="btn" onClick={handleClick}>
          -
        </button>
        <button name="." className="btn" onClick={handleClick}>
          .
        </button>
        <button name="0" className="btn" onClick={handleClick}>
          0
        </button>
        <button name="/" className="btn" onClick={handleClick}>
          /
        </button>
        <button name="*" className="btn" onClick={handleClick}>
          X
        </button>
        <button className="resetBtn btn " onClick={reset}>
          RESET
        </button>
        <button name="=" className="resultBtn btn" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default CalculatorContent;
