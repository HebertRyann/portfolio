import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Switch from 'react-switch';

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
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <Switch
        onChange={toggleTheme}
        checked={selectedTheme === "dark"}
        checkedIcon={<FaSun size={16} style={{
          marginTop: '6px',
          marginLeft: '4px',
          color: '#312E38'
        }}/>}
        uncheckedIcon={<FaMoon size={16} style={{
          marginTop: '6px',
          marginLeft: '8px',
          color: '#fff'
        }}/>}
        onColor="#6BFA8A"
        offColor="#0066ff"
      />
    </div>
  )

};

export default ThemeToggle;
