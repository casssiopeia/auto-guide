import React from "react";
import styles from "./index.module.css";
import { SearchOutlined } from "@mui/icons-material";

export const Search = () => {

    return (
        <>
            <div className={`${styles.searchField}`}>
                <label>Поиск</label>
                <input type="text" placeholder="Ваш запрос" />
                <SearchOutlined className={`${styles.search}`} style={{fontSize: 32}} />
            </div>
        </>
    )
}