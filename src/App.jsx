import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import background from "./images/background.png";
import Body from "./layout/body/Body";
import Drawer from "./layout/drawer/Drawer";
import About from "./pages/about/About";
import FrezoEditor from "./pages/frezo-editor/FrezoEditor";
import ChapterLayout from './pages/frezo-learning/ChapterLayout';
import FrezoLearning from "./pages/frezo-learning/FrezoLearning";
import Chapter1 from "./pages/frezo-learning/chapter1/Chapter1";
import Chapter2 from "./pages/frezo-learning/chapter2/Chapter2";
import Chapter3 from "./pages/frezo-learning/chapter3/Chapter3";
import Chapter4 from "./pages/frezo-learning/chapter4/Chapter4";
import Chapter5 from "./pages/frezo-learning/chapter5/Chapter5";
import FrezoTranslate from "./pages/frezo-translate/FrezoTranslate";
import FrezoWriter from "./pages/frezo-writer/FrezoWriter";
import Home from "./pages/home/Home";

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
        overflowX: "auto",
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

            <Route path="/learning/chapter-1" element={<ChapterLayout><Chapter1 /></ChapterLayout>} />
            <Route path="/learning/chapter-2" element={<ChapterLayout><Chapter2 /></ChapterLayout>} />
            <Route path="/learning/chapter-3" element={<ChapterLayout><Chapter3 /></ChapterLayout>} />
            <Route path="/learning/chapter-4" element={<ChapterLayout><Chapter4 /></ChapterLayout>} />
            <Route path="/learning/chapter-5" element={<ChapterLayout><Chapter5 /></ChapterLayout>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
