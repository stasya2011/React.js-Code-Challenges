import React, { useState } from "react";

const ColorButton = () => {
  const [color, setColor] = useState("red");
  return (
    <button
      onClick={() => setColor(() => (color === "blue" ? "red" : "blue"))}
      style={{ backgroundColor: color }}
    >
      Change to {color === "blue" ? "red" : "blue"}
    </button>
  );
};

export default ColorButton;
