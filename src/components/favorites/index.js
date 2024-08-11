import React from "react";
import { useSelector } from "react-redux";
import { getBookmarks } from "../../store/selectors";
import { AutoCard } from "../auto-card";
import styles from "./index.module.css";

export const Favorites = () => {

    const bookmarks = useSelector(state => getBookmarks(state));

    return (
        <div className={styles.wrapper}>
            <div className={styles.favoritesElem}>
                {bookmarks.length > 0 ? (
                    bookmarks.map(car => (
                        <AutoCard {...car} />
                    ))
                ) : (
                    <p className={styles.empty}>Список пуст.</p>
                )}
            </div>
        </div>
    );
}