import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "../components/searchVideo.jsx";
import Layout from "../layout/Layout.jsx";
import "../Index.css";
import { useSidebar } from "../context/SidebarContext.jsx";

export default function Searchscreen(){
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [search, setSearch] = useState(query);
    const { isCollapsed } = useSidebar();

    useEffect(() => {
        setSearch(query);
    }, [query]);

    return (
        <div className={`grid ${isCollapsed ? "grid-cols-[72px_1fr]" : "grid-cols-[240px_1fr]"} grid-rows-[auto_1fr] [grid-template-areas:'nav_nav'_'ham_main'] w-full min-h-screen transition-all duration-300`}>
            <Layout setSearch={setSearch} search={search}/>
            <div className="[grid-area:main]">
                <Search Input_value={search}/>
            </div>
        </div>
    )
}