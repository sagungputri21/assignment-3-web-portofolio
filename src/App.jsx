import { useState } from "react";
import reactLogo from "../public/assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import SideBar from "./components/navbar/Sidebar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
    </div>
  );
}

export default App;
