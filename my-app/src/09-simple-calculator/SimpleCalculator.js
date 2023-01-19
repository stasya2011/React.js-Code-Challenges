import { useReducer, useEffect } from "react";
import reducer, { initialState } from "./reducer";

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button
            onClick={(e) => dispatch({ type: "N1", payload: number })}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button
            onClick={() => dispatch({ type: "N2", payload: number })}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        <button onClick={() => dispatch({ type: "DEC" })}>-</button>
        <button onClick={() => dispatch({ type: "UNSET" })}>c</button>
      </div>
      <div>
        <h2>Result: {state.result}</h2>
      </div>
    </div>
  );
}
