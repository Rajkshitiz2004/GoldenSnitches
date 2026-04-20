import React from "react";
import Mainfeed from "./components/homeBar/Mainfeed.jsx";
import Hamburger from "./components/hamburger/ham.jsx";
import "./app.css";
import Navsearch from "./components/searchBar/navSearch.jsx";

export default function App() {
    return (
        <div className="mainContainer">
            <Navsearch />
            <Hamburger />
            <Mainfeed />
        </div>
    )
}