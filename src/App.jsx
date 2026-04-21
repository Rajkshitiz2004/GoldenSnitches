import React from "react";
import Mainfeed from "./pages/Home.jsx";
import Layout from "./components/layout/layout.jsx";

import "./Index.css";

export default function App() {
    return (
        <div className="mainContainer">
            <Layout />
            <Mainfeed />
        </div>
    )
}