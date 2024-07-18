import React from "react";
import { Search } from "../search";
import { CompareArrowsOutlined } from "@mui/icons-material";
import { BookmarksOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

export const Header = () => {

    const navigate = useNavigate();

    const mainPageClicked = () => {
        navigate(`/`);
    }

    const bookmarksClicked = () => {
        navigate(`/favorites`);
    }

    const comparisonClicked = () => {
        navigate(`/comparison`);
    }

    return (
        <>
        <div className={styles.header}>
            <div className={styles.headerElems}>
            <h2 onClick={mainPageClicked}>Auto Guide</h2>
            // TODO: Link
            <div className={styles.search}>
                <Search />
            </div>
            <BookmarksOutlined
                style={{ fontSize: 32 }}
                className={styles.favorites}
                onClick={bookmarksClicked}
            />
            <CompareArrowsOutlined
                style={{ fontSize: 32 }}
                className={styles.compare}
                onClick={comparisonClicked}
            />
            </div>
        </div>
        </>
    );
};
