import React, { useState, useContext } from "react";

const CodeContext = React.createContext();

const CodeProvider = ({ children }) => {
  const [code, setCode] = useState("");

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export { CodeContext, CodeProvider };

// Creating a custom global hook to access the code context
export const useCodeContext = () => useContext(CodeContext);
