import { useContext, useState, useEffect } from "react";
import context from "./context";

function Pixel() {
  const color = useContext(context);
  const [bgColor, setBGColor] = useState("lightGrey");

  useEffect(() => {
    console.log("update");
    check();
  }, [color.isStart]);

  const check = () => {
    if (color.isStart) {
      setBGColor(() => "lightGrey");
      color.unset(() => false);
    }
  };

  return (
    <div
      onClick={() => setBGColor(() => color.color)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: bgColor,
        margin: "1px",
      }}
    />
  );
}

export default Pixel;
