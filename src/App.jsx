import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Searchscreen from "./pages/Searchscreen.jsx";
import VideoScreen from "./pages/videoSection.jsx"

import "./Index.css";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Searchscreen />} />
                    <Route path="/watch_v/:videoId" element={<VideoScreen />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}