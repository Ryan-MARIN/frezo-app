import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import FrezoEditor from "./pages/FrezoEditor";
import FrezoLearning from "./pages/FrezoLearning";
import FrezoTranslate from "./pages/FrezoTranslate";
import FrezoWriter from "./pages/FrezoWriter";
import About from "./pages/About";
import FrezoHome from "./pages/FrezoHome";
import background from "./images/background.png";
import Drawer from "./layout/drawer/Drawer";
import Body from "./layout/body/Body";
import React from "react";

function App() {
  return (
    <div className="App" style={{
        display: "flex",
        flexGrow: 1,
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    }}>
        <BrowserRouter>
            <Drawer/>
            <Routes>
                <Route path="/" element={<Navigate to='/home'/>}/>
                <Route path="/" element={<Body/>}>
                    <Route path="/home" element={<FrezoHome/>}/>
                    <Route path="/writer" element={<FrezoWriter/>}/>
                    <Route path="/translate" element={<FrezoTranslate/>}/>
                    <Route path="/learning" element={<FrezoLearning/>}/>
                    <Route path="/editor" element={<FrezoEditor/>}/>
                    <Route path="/about" element={<About/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
