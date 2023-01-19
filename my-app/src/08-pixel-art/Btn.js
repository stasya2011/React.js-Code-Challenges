import { useContext } from "react";
import context from "./context";

const Btn = () => {
  const { unset } = useContext(context);
  return <button onClick={() => unset(true)}>unset</button>;
};

export default Btn;
