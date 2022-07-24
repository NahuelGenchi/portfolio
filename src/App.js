import Favicon from "react-favicon";

import { Topbar } from "./components";
import { Header, About, Projects, Skills, Contact } from "./container";

function App() {
  return (
    <div className="app">
      <Favicon url="https://github.com/NahuelGenchi/portfolio/blob/main/src/assets/favicon.png?v=ANYTHING" />
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
