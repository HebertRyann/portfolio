import { createContext, useCallback, useContext, useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = selectedTheme === "light" ? "dark" : "light";

  const toggleTheme = useCallback(() => {
    setSelectedTheme(inactiveTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if(selectedTheme){
      document.body.dataset.theme = selectedTheme;
      localStorage.setItem('@Mychat:Theme', selectedTheme);
    }    
  }, [selectedTheme]);

  return (
    <div>
      <button type="button" onClick={toggleTheme}>toggle</button>
    </div>
  )

};

export default ThemeToggle;
