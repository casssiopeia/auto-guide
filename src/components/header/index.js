import React, { useState } from "react";
import { Search } from "../search";
import { CompareArrowsOutlined } from "@mui/icons-material";
import { BookmarksOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Comparison } from "../comparison";
import styles from "./index.module.css";

export const Header = () => {

    const [showComparison, setShowComparison] = useState(false);

    const compBtnOnClick = () => {

        setShowComparison(true);
    }

    const onComparisonClose = () => setShowComparison(false);

    return (
        <>
        {showComparison && (
            <Comparison
            isOpen={showComparison}
            onClose={onComparisonClose}
            />
        )}
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
                <CompareArrowsOutlined
                    style={{ fontSize: 32 }}
                    className={styles.compare}
                    onClick={compBtnOnClick}
                />
            </div>
        </div>
        </>
    );
};
