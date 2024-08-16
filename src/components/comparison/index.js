import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { getBestCar } from "../../utils/comparator";
import { getCarsToCompare } from "../../store/selectors";
import { CompareArrows } from "@mui/icons-material";
import { Close, Delete } from "@mui/icons-material";
import { RatingStar } from "../ratingStar";
import { clearCarsToCompare } from "../../store/comparedCarsSlice";
import styles from "./index.module.css";

const COMPARSION_CONFIG = [
    {
        kind: "engine",
        comparatorType: "biggerBetter",
    },
    {
        kind: "year",
        comparatorType: "biggerBetter",
    },
    {
        kind: "price",
        comparatorType: "lowerBetter",
    },
    {
        kind: "tankValue",
        comparatorType: "biggerBetter",
    },
    {
        kind: "consumption",
        comparatorType: "lowerBetter",
    }
];

export const Comparison = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();

    const carsToCompare = useSelector(state => getCarsToCompare(state));

    if (!isOpen) {
        return null;
    }

    const handleClear = () => {

        dispatch(clearCarsToCompare());
    }

    if (carsToCompare.length < 2) {

        return (
            <>
                <div className={styles.overlay}></div>
                <div className={styles.comparison}>
                    <div className={styles.close}>
                        <CompareArrows className={styles.compareIcon} style={{ fontSize: 35 }} />
                        <p>Сравнение</p>
                        <Close className={styles.closeBtn} style={{fontSize: 30}} onClick={onClose} />
                    </div>
                    <div className={styles.noItems}>
                        <p>Добавьте больше автомобилей для сравнения.</p>
                    </div>
                </div>
            </>
        );
    }

    const bestCarsIds = COMPARSION_CONFIG.map(({kind, comparatorType}) => {
        return getBestCar(carsToCompare, kind, comparatorType);
    });

    return (
        <>
            <div className={styles.overlay}></div>
            <div className={styles.comparison}>
                <div className={styles.close}>
                    <CompareArrows className={styles.compareIcon} style={{ fontSize: 35 }} />
                    <p>Сравнение</p>
                    <Close className={styles.closeBtn} style={{fontSize: 30}} onClick={onClose} />
                </div>
                <div className={styles.comparedCars}>
                    {carsToCompare.map(car => (
                        <div key={car.id} className={styles.carItem}>
                            <div className={styles.ratingWrapper}>
                                <div className={styles.ratingStarsWrapper}>
                                    {bestCarsIds.filter(({id}) => car.id === id).map(() => {
                                        return <RatingStar />;
                                    })}
                                </div>
                                <div className={styles.carImg}>
                                    <img src={car.picture} alt="" />
                                </div>
                            </div>
                            <div className={styles.carInfo}>
                                <h2>{car.brand} {car.model}</h2>
                                <p>Модель <strong>{car.year} года</strong> выпуска.</p>
                                <p><strong>Объём бака:</strong> {car.tankValue} л.</p>
                                <p><strong>Объём двигателя:</strong> {car.engine.toFixed(1)} л.</p>
                                <p><strong>Расход топлива:</strong> {car.consumption.toFixed(1)} л/100 км.</p>
                                <h3>Средняя цена: {car.price} $</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <Tooltip id="clear" />
                <Delete
                    data-tooltip-id="clear" 
                    data-tooltip-content="Очистить сравнение" 
                    data-tooltip-place="top"
                    onClick={handleClear}
                    style={{ fontSize: 40 }}
                    className={styles.deleteBtn}
                />
            </div>
        </>
    );
}
