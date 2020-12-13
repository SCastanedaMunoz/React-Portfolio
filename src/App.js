import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import WebProjectContext from "./utils/WebProjectContext";

function App() {

  const [webState, setWebState] = useState({
    current: "about",
    title: "",
    link_deploy: "",
    link_github: "",
    screenshot: "",
    summary: "",
    onDropDownClick: (title, link_deploy, link_github, screenshot, summary) => {
      const current = "webdev";
      setWebState({ ...webState, current, title, link_deploy, link_github, screenshot, summary });
      console.log(webState);
    },
    onAboutClick: () => {
      const current = "about";
      setWebState({ ...webState, current });
    }
  })

  return (
    <WebProjectContext.Provider value={webState}>
      <Nav></Nav>
    </WebProjectContext.Provider>
  );
}

export default App;
