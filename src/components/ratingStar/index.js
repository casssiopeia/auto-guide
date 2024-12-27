import React from "react";
import { Star } from "@mui/icons-material";
import styles from "./index.module.css";

export const RatingStar = () => {

    return(
        <Star className={styles.star} style={{ fontSize: 35 }} />
    );
}