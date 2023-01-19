import { useEffect, useState } from "react";
import Color from "./Color";

const colors = [
  {
    hex: "#91A6FF",
    name: "Cornflower Blue",
  },
  {
    hex: "#FF88DC",
    name: "Persian Pink",
  },
  {
    hex: "#80FF72",
    name: "Screamin Green",
  },
  {
    hex: "#FF5154",
    name: "Tart Orange",
  },
];

export default function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    document.body
      .querySelectorAll(".page")
      .forEach((el) => (el.style.backgroundColor = backgroundColor));
  }, [backgroundColor]);

  const changeBackground = (color) => {
    console.log("+++*+++", color);
    setBackgroundColor(() => color);
  };

  return (
    <div className="page" style={{ backgroundColor }}>
      {colors.map((color) => (
        <Color
          setColor={() => changeBackground(color.hex)}
          key={color.hex}
          hex={color.hex}
          name={color.name}
        />
      ))}
    </div>
  );
}
