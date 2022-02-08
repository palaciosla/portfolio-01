import "./App.css";
import React, { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "App light" : "App"}>
      <Hero />
      <Navbar />
      <Main />

      <Footer />
    </div>
  );
}

export default App;
