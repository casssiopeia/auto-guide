import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../store/selectors";
import { getCarsToCompare } from "../../store/selectors";
import { Search } from "../search";
import { CompareArrowsOutlined } from "@mui/icons-material";
import { BookmarksOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Comparison } from "../comparison";
import styles from "./index.module.css";

export const Header = () => {

    const bookmarks = useSelector(state => getBookmarks(state));
    const carsToCompare = useSelector(state => getCarsToCompare(state));

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
                <div className={styles.searchBtnWrapper}>
                    <div className={styles.search}>
                        <Search />
                    </div>
                    <div className={styles.iconsWrapper}>
                        <Link to="/favorites">
                            <div className={styles.iconWrapper}>
                                <BookmarksOutlined
                                    style={{ fontSize: 32 }}
                                    className={styles.favorites}
                                />
                                <span className={styles.count}>{bookmarks.length}</span>
                            </div>
                        </Link>
                        <div className={styles.iconWrapper} onClick={compBtnOnClick}>
                            <CompareArrowsOutlined
                                style={{ fontSize: 32 }}
                                className={styles.compare}
                            />
                            <span className={styles.count}>{carsToCompare.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
