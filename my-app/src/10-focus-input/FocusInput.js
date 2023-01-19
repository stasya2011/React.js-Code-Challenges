import { useRef, useEffect } from "react";

export default function FocusInput() {
  const myRef = useRef();
  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input ref={myRef} name="focused-input"></input>
      <button onClick={() => console.log(myRef.current.value)}>Click</button>
    </div>
  );
}
