import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import background from "./images/background.png";
import Drawer from "./layout/drawer/Drawer";
import Body from "./layout/body/Body";
import React from "react";
import FrezoEditor from "./pages/frezo-editor/FrezoEditor";
import FrezoWriter from "./pages/frezo-writer/FrezoWriter";
import Home from "./pages/home/Home";
import FrezoTranslate from "./pages/frezo-translate/FrezoTranslate";
import FrezoLearning from "./pages/frezo-learning/FrezoLearning";
import About from "./pages/about/About";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexGrow: 1,
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <BrowserRouter>
        <Drawer />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<Body />}>
            <Route path="/home" element={<Home />} />
            <Route path="/writer" element={<FrezoWriter />} />
            <Route path="/translate" element={<FrezoTranslate />} />
            <Route path="/learning" element={<FrezoLearning />} />
            <Route path="/editor" element={<FrezoEditor />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
