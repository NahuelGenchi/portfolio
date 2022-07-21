import { Topbar } from "./components";
import { Header, About, Projects, Technologies, Contact } from "./container";

function App() {
  return (
    <div className="app">
      <Topbar />
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
}

export default App;
