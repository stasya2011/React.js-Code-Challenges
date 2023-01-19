import { useReducer, useEffect } from "react";

const initialState = { num1: 0, num2: 0, result: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "N1":
      return { ...state, num1: action.payload };
    case "N2":
      return { ...state, num2: action.payload };
    case "INC":
      return { ...state, result: state.num1 + state.num2 };
    case "DEC":
      return { ...state, result: state.num1 - state.num2 };
    case "UNSET":
      return { ...initialState };
    default:
      return state;
  }
}

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  });

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
