import React from "react";
import { Header } from "./components/header";
import { Catalog } from "./components/catalog";
import styles from "./app.module.css";

export const App = () => {

    return(
        <>
            <Header />
            <div className={`${styles.wrapper}`}>
                <Catalog />
            </div>
        </>
    );
}