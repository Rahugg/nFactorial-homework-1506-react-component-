import { useState, useContext } from "react";
import { DefaultContext } from "./Context";
import { ThemeContext } from "./contexts/themes";
//импортируем стили
import "./App.css";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export default function App() {
  const [fan, setFan] = useState("");

  const handleCreateFan = ({ name }) => {
    setFan(name);
  };
  
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);

  return (
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <div style = {{backgroundColor:theme.backgroundColor, color: theme.color}}>
        <Header fan={fan} />
      <button onClick={toggleTheme}>Set theme to {isDark? "light" : "dark"}</button>
      <hr />
      <Content />
      <Footer />
      </div>
      
    </DefaultContext.Provider>
  );
}
