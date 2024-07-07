import React from "react";
import { Search } from "../search";
import { CompareArrowsOutlined } from "@mui/icons-material";
import { BookmarksOutlined } from "@mui/icons-material";
import styles from "./index.module.css";

export const Header = () => {

    return (
        <>
            <div className={`${styles.header}`}>
                <div className={`${styles.headerElems}`}>
                    <h2>Auto Guide</h2>
                    {/* TODO: вынести целиком в компонент */}
                    <div className={`${styles.search}`}>
                        <label>Поиск</label>
                        <Search />
                    </div>
                    <BookmarksOutlined style={{fontSize: 32}} className={`${styles.favorites}`} />
                    <CompareArrowsOutlined style={{fontSize: 32}} className={`${styles.compare}`} />
                </div>
            </div>
        </>
    )
}