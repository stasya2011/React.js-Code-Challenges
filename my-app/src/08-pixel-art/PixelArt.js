import { useState } from "react";
import ColorPicker from "./ColorPicker";
import context from "./context";
import Pixels from "./Pixels";
import Btn from "./Btn";

export default function PixelArt() {
  const [color, setColor] = useState("lightGrey");
  const [isStart, unset] = useState(false);
  const { Provider } = context;

  return (
    <Provider value={{ color, setColor, isStart, unset }}>
      <div>
        <ColorPicker />
        <Pixels />
        <Btn />
      </div>
    </Provider>
  );
}
