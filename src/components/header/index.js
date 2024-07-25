import React from "react";
import { Search } from "../search";
import { CompareArrowsOutlined } from "@mui/icons-material";
import { BookmarksOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

export const Header = () => {

    return (
        <>
        <div className={styles.header}>
            <div className={styles.headerElems}>
                <Link to="/" className={styles.logo}>Auto Guide</Link>
                <div className={styles.search}>
                    <Search />
                </div>
                <Link to="/favorites">
                    <BookmarksOutlined
                        style={{ fontSize: 32 }}
                        className={styles.favorites}
                    />
                </Link>
                <Link to="/comparison">
                    <CompareArrowsOutlined
                        style={{ fontSize: 32 }}
                        className={styles.compare}
                    />
                </Link>
            </div>
        </div>
        </>
    );
};
