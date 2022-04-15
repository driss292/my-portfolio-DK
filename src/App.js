import About from "./containers/About";
import Contact from "./containers/Contact";
import Home from "./containers/Home";
import Skills from "./containers/Skills";
import Work from "./containers/Work";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
