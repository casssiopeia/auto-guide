import React from "react";
import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { Basement } from "../components/basement";

export const Main = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Basement />
        </>
    );
}