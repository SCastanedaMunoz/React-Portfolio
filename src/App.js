import { useState } from 'react';
import './App.css';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WebProjectContext from "./utils/WebProjectContext";
import About from "./pages/About";
import WebProject from "./pages/WebProject";
import { PAGE_ABOUT, PAGE_WEBPROJECT } from "./utils/constants";


function App() {

  const [webState, setWebState] = useState({
    current: PAGE_ABOUT,
    title: "",
    link_deploy: "",
    link_github: "",
    screenshot: "",
    summary: "",
    onDropDownClick: (title, link_deploy, link_github, screenshot, summary) => {
      const current = PAGE_WEBPROJECT;
      setWebState({ ...webState, current, title, link_deploy, link_github, screenshot, summary });
      console.log(webState);
    },
    onAboutClick: () => {
      const current = PAGE_ABOUT;
      setWebState({ ...webState, current });
    }
  })

  const getPage = () => {
    switch (webState.current) {
      case PAGE_WEBPROJECT:
        return <WebProject title={webState.title} link_deploy={webState.link_deploy} link_github={webState.link_github} screenshot={webState.screenshot} summary={webState.summary} />;
      default:
      case PAGE_ABOUT:
        return <About />
    }
  }

  return (
    <WebProjectContext.Provider value={webState}>
      <Nav />
      {getPage()}
      <Footer />
    </WebProjectContext.Provider>
  );
}

export default App;
