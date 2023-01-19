import { useEffect } from "react";

export default function WindowEvent() {
  const dbClick = () => alert("Hello");
  useEffect(() => {
    console.log("++++");
    window.addEventListener("dblclick", dbClick);

    return () => {
      window.removeEventListener("dblclick", dbClick);
    };
  });
  return <h2>Window event active</h2>;
}
