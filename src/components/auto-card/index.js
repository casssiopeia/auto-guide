import React, { useState } from "react";
import { Button } from "../button";
import styles from "./index.module.css";
import { BookmarkBorderOutlined } from "@mui/icons-material";
import { BookmarkOutlined } from "@mui/icons-material";

export const AutoCard = ({ picture, brand, model, year, price, engine, gearBox, bodyType, color, description, id, onCardClick }) => {

    const [isBookmarked, setIsBookmarked] = useState(true);

    const toggleBookmark = () => {

        setIsBookmarked((prev) => !prev);
    }

    return (
        <>
            <div className={`${styles.card}`}>
                <div onClick={() => onCardClick({picture, brand, model, year, price, engine, gearBox, bodyType, color, description, id})}>
                    <img className={`${styles.img}`} src={picture} alt="" />
                    <h2>{brand} {model}</h2>
                    <p>{year} Год</p>
                    <p>Средняя цена: {price} $</p>
                </div>
                <div className={`${styles.btnWrapper}`}>
                    { isBookmarked ? (
                    <BookmarkBorderOutlined style={{fontSize: 40}} className={`${styles.bookmark}`} onClick={toggleBookmark} />
                    ) : (
                    <BookmarkOutlined style={{fontSize: 40}} htmlColor="#fff566" className={`${styles.bookmark}`} onClick={toggleBookmark} /> 
                    )}
                    <Button />
                </div>
            </div>
        </>
    )
}

// TODO: Добавить оценку