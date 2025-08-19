import { createContext, useState, useContext } from "react";

//1. Creating Context
const NameContext = createContext(null);

//2. create provider

export const NameProvider = ({ children }) => {
  const [name, setName] = useState("Atul");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

//3. using values by context
export const useName = () => {
  return useContext(NameContext);
};
