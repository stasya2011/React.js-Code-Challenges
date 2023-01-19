export const initialState = { num1: 0, num2: 0, result: 0 };

function reducer(state = initialState, action) {
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

export default reducer;
