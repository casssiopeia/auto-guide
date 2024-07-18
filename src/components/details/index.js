import React from "react";
import styles from "./index.module.css";
import { Close } from "@mui/icons-material";

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
    id, 
    isOpen, 
    onClose
}) => {


    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.details}>
                <div className={styles.close}>
                    <h3>Подробная мнформация о {brand} {model} {year}</h3>
                    <Close className={styles.closeBtn} style={{fontSize: 30}} onClick={onClose} />
                </div>
                <div className={styles.imgWrapper}>
                    <img src={picture} alt="" />
                </div>
                <div className={styles.infoWrapper}>
                    <h2>{brand} {model}</h2>
                    <p>Модель {year} года выпуска.</p>
                    <p>Тип кузова: {bodyType}.</p>
                    <p>Коробка переключения передач: {gearBox}.</p>
                    <p>Объём двигателя: {engine} л.</p>
                    <p>Параметры: {description}.</p>
                    <h3>Средняя цена: {price} $</h3>
                </div>
            </div>
        </>
    )
}

// TODO:
// Добавить возможность оценивать
// Добавить возможность комментировать