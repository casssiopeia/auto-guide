import React, { useEffect } from "react";
import { Header } from "./components/header";
import { Catalog } from "./components/catalog";
import { useDispatch } from "react-redux";
import { getCars } from "./store/async-action";

export const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars);
    }, []);

    return(
        <>
            <Header />
            <Catalog />
        </>
    );
}