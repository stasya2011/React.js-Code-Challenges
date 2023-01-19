import { useContext } from "react";
import context from "./context";

function ColorPicker() {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const newColor = useContext(context);

  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          onClick={() => newColor.setColor(color)}
          key={color}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default ColorPicker;
