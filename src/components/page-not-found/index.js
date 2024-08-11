import React from "react";
import { Link } from "react-router-dom";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import styles from "./index.module.css";

export const PageNotFound = () => {

    return (
        <div className={styles.notFoundWrapper}>
            <SentimentVeryDissatisfied className={styles.emoji} style={{ fontSize: 300 }} />
            <h2>404</h2>
            <p>Страница не найдена.</p>
            <Link to="/" className={styles.link}>Вернуться на главную</Link>
        </div>
    );
}