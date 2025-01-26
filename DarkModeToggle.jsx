import React from "react";
import useToggle from "./CustomHook2"; 
const DarkModeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const style = {
    container: {
      backgroundColor: isDarkMode ? "#1a202c" : "white",
      color: isDarkMode ? "white" : "black",
    },
  };
  return (
    <div style={style.container}>
      <h1>Toggle Dark Mode</h1>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default DarkModeToggle;