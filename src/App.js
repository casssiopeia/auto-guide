import React, { useEffect } from "react";
import { Router } from "./router";
import { useDispatch } from "react-redux";
import { getCars } from "./store/async-action";

export const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars());
    }, [dispatch]);

    return(
        <Router />
    );
}