import React, { useState } from "react";
// SGeleisha2011201515
//12061992Stasya!
const ColorButton = () => {
  const [color, setColor] = useState("red");
  const [isDisabled, setDis] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        border: " 1px solid red",
        paddingTop: 10,
        margin: "16px auto",
      }}
    >
      <button
        disabled={isDisabled}
        onClick={() => setColor(() => (color === "blue" ? "red" : "blue"))}
        style={{ backgroundColor: color, width: 200 }}
      >
        Change to {color === "blue" ? "red" : "blue"}
      </button>
      <input
        onClick={() => setDis((isDisabled) => !isDisabled)}
        checked={isDisabled}
        type="checkbox"
        name="checkbox-name"
        id="checkbox-1"
      />
      <label htmlFor="checkbox-1">Disable button</label>
    </div>
  );
};

export default ColorButton;
