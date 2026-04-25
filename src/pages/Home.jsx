import React, { useState } from "react";
import Mainfeed from "../components/homeVideo.jsx";
import Layout from "../layout/Layout.jsx";
import { useSidebar } from "../context/SidebarContext.jsx";
import "../Index.css";

export default function Home() {
    const [search, setSearch] = useState("");
    const { isCollapsed } = useSidebar();
    
    return (
        <div className={`grid ${isCollapsed ? 'grid-cols-[72px_1fr]' : 'grid-cols-[240px_1fr]'} grid-rows-[auto_1fr] [grid-template-areas:'nav_nav'_'ham_main'] w-full min-h-screen transition-all duration-300`}>
            <Layout setSearch={setSearch} search={search} />
            <Mainfeed/>
        </div>
    )
}