import React, { useState } from "react";
import VideoPlayer from "../components/videoPlayer.jsx";
import Layout from "../layout/Layout.jsx";
import "../Index.css";

export default function VideoScreen(){
    const [search, setSearch] = useState("");

    return (
        <div className="grid grid-cols-[2fr_8fr] grid-rows-[1fr_auto] [grid-template-areas:'nav_nav'_'ham_main'] w-full min-h-screen">
            <Layout setSearch={setSearch} search={search}/>
            <div className="[grid-area:main] p-4">
                <VideoPlayer/>
            </div>
        </div>
    )
}