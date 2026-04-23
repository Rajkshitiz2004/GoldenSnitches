import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Searchscreen from "./pages/Searchscreen.jsx";
import VideoScreen from "./pages/videoSection.jsx"
import UploadScreen from "./pages/uploadSection.jsx";
import CreatorsScreen from "./pages/CreatorsSection.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import "./Index.css";

export default function App() {
    return (
        <SidebarProvider>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Searchscreen />} />
                        <Route path="/watch_v/:videoId" element={<VideoScreen />} />
                        <Route path="/upload" element={<UploadScreen />}/>
                        <Route path="/creator/:channelId" element={<CreatorsScreen />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </SidebarProvider>
    )
}