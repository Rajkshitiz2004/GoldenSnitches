import React, { useState } from "react";
import Hamburger from "./Ham.jsx";
import Navsearch from "./Nav.jsx";
import "../Index.css";

export default function Layout({ search, setSearch }) {

    return (
        <>
            <Navsearch setSearch={setSearch} search={search} />
            <Hamburger />
        </>
    )
}
