import  { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeConsumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme === "dark" ? "grey" : "white",
        height: "100vh",
      }}
    >
      <button onClick={toggleTheme}>{theme}</button>
    </div>
  );
};

export default ThemeConsumer;
