import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button";
import { BookmarkBorderOutlined, BookmarkOutlined } from "@mui/icons-material";
import { addBookmark, removeBookmark } from "../../store/bookmarkSlice";
import { isBookmarked } from "../../store/selectors";
import { isCarInCompare } from "../../store/selectors";
import styles from "./index.module.css";

export const Details = ({ 
    picture, 
    brand, 
    model, 
    year, 
    engine, 
    bodyType, 
    gearBox, 
    description, 
    price, 
    color,
    tankValue,
    consumption,
    info,
    id
}) => {

    const dispatch = useDispatch();
    const bookmarked = useSelector(state => isBookmarked(state, id));
    const compared = useSelector(state => isCarInCompare(state, id));

    const toggleBookmark = () => {

        if (bookmarked) {
            dispatch(removeBookmark(id));
        } else {
            dispatch(addBookmark({ picture, brand, model, year, price, engine, id, bodyType, gearBox, description, color }));
        }
    }

    return (
        <div className={styles.details}>
            <div className={styles.close}>
                <h3>Подробная мнформация о {brand} {model} {year}</h3>
            </div>
            <div className={styles.imgAndButtons}>
                <div className={styles.imgWrapper}>
                    <img src={picture} alt={brand} />
                </div>
                <div className={styles.buttons}>
                    { bookmarked ? (
                        <BookmarkOutlined style={{ fontSize: 50 }} htmlColor="#fff008" className={styles.bookmark} onClick={toggleBookmark} />
                    ) : (
                        <BookmarkBorderOutlined style={{ fontSize: 50 }} className={styles.bookmark} onClick={toggleBookmark} />
                    )}
                    <Button car={{ picture, brand, model, year, price, engine, id, bodyType, gearBox, description, color }} isCarInCompare={compared} />
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <h2>{brand} {model}</h2>
                <p>Модель {year} года выпуска.</p>
                <p>Тип кузова: {bodyType}.</p>
                <p>Цвет: {color}</p>
                <p>Коробка переключения передач: {gearBox}.</p>
                <p>Объём бака: {tankValue} л.</p>
                <p>Объём двигателя: {engine} л.</p>
                <p>Расход топлива: {consumption} л/100 км.</p>
                <p>Параметры: {description}.</p>
                <p>{info}</p>
                <h3>Средняя цена: {price} $</h3>
            </div>
        </div>
    )
}
