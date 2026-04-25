import React, { useState } from "react";
import Upload from "../components/uploadVideo.jsx";
import Layout from "../layout/Layout.jsx";
import "../Index.css";

export default function UploadScreen() {
    const [search, setSearch] = useState("");

    return (
        <div className="grid grid-cols-[2fr_8fr] grid-rows-[1fr_auto] [grid-template-areas:'nav_nav'_'ham_main'] w-full min-h-screen">
            <Layout setSearch={setSearch} search={search} />
            <div>
                <Upload />
            </div>
        </div>
    )
}