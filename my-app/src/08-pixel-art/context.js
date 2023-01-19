import { createContext } from "react";

const context = createContext({ color: "green", setColor: () => {} });

export default context;
