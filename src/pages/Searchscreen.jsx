import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "../components/searchVideo.jsx";
import Layout from "../layout/Layout.jsx";
import "../Index.css";

export default function Searchscreen(){
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [search, setSearch] = useState(query);

    useEffect(() => {
        setSearch(query);
    }, [query]);

    return (
        <div className="grid grid-cols-[2fr_8fr] grid-rows-[1fr_auto] [grid-template-areas:'nav_nav'_'ham_main'] w-full min-h-screen">
            <Layout setSearch={setSearch} search={search}/>
            <div className="[grid-area:main] p-4">
                <Search Input_value={search}/>
            </div>
        </div>
    )
}