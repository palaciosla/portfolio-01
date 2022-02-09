import { createContext, useState } from "react";
import translationsInfo from "../helpers/translationsInfo";

const LanguageContext = createContext();
const initialLanguage = "en";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translationsInfo[language]);

  const handleLanguage = (languageMode) => {
    if (languageMode === "es") {
      setLanguage("es");
      setTexts(translationsInfo.es);
    } else {
      setLanguage("en");
      setTexts(translationsInfo.en);
    }
  };

  const data = { language, setLanguage, texts, setTexts, handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
