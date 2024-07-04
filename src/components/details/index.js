import React, { memo } from "react";
import styles from "./index.module.css";
import { Close } from "@mui/icons-material";

export const Details = memo(({ picture, brand, model, year, engine, bodyType, gearBox, description, price, id, isOpen, onClose}) => {

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className={`${styles.overlay}`}></div>
            <div className={`${styles.details}`}>
                <div className={`${styles.close}`}>
                    <h3>Подробная мнформация о {brand} {model} {year}</h3>
                    <Close className={`${styles.closeBtn}`} style={{fontSize: 30}} onClick={onClose} />
                </div>
                <div className={`${styles.imgWrapper}`}>
                    <img src={picture} alt="" />
                </div>
                <div className={`${styles.infoWrapper}`}>
                    <h2 className={`${styles.infoH2}`}>{brand} {model}</h2>
                    <p className={`${styles.infoP}`}>Модель {year} года выпуска.</p>
                    <p className={`${styles.infoP}`}>Тип кузова: {bodyType}.</p>
                    <p className={`${styles.infoP}`}>Коробка переключения передач: {gearBox}.</p>
                    <p className={`${styles.infoP}`}>Объём двигателя: {engine} л.</p>
                    <p className={`${styles.infoP}`}>Параметры: {description}.</p>
                    <h3 className={`${styles.infoH3}`}>Средняя цена: {price} $</h3>
                </div>
            </div>
        </>
    )
})