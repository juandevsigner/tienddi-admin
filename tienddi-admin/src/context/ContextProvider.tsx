import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [menuActivo, setMenuActivo] = useState(false);
  return (
    <StateContext.Provider
      value={{
        setMenuActivo,
        menuActivo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
