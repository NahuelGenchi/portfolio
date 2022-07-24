import Favicon from "react-favicon";

import { Topbar } from "./components";
import { Header, About, Projects, Skills, Contact } from "./container";

function App() {
  return (
    <div className="app">
      <Favicon url="https://raw.githubusercontent.com/NahuelGenchi/portfolio/main/src/assets/favicon.png" />
      <Topbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
