import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "dark";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (themeMode) => {
    if (themeMode === "light") {
      console.log("cambiar a modo light");
      setTheme("light");
    } else {
      console.log("cambiar a modo dark");
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
