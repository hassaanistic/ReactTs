import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

function BoxContext() {
  const { theme, toggleTheme } = useContext(ThemeContext);
//   alert(theme);
  return (
    <div>
      <div
        className="boxContainer"
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <h1>Box 1</h1>
        <button onClick={toggleTheme}>ChangeTheme</button>
      </div>
    </div>
  );
}

export default BoxContext;
