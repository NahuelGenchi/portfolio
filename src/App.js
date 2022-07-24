import Favicon from "react-favicon";

import { Topbar } from "./components";
import { Header, About, Projects, Skills, Contact } from "./container";

function App() {
  return (
    <div className="app">
      <Favicon url="https://cdn-icons-png.flaticon.com/512/428/428001.png?v=ANYTHING" />
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
