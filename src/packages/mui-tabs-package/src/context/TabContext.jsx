import React, { createContext, useContext, useState } from "react";

const TabContext = createContext();

export const TabContextProvider = ({ children, defaulValue = 0 }) => {
  const [value, setValue] = useState(defaulValue);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext.Provider value={{ value, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) throw new Error("Outside TabProvider");
  return context;
};
