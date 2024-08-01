import React from "react";
import { useSelector } from "react-redux";
import { getCarsToCompare } from "../../store/selectors";
import { CompareArrows } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { RatingStar } from "../ratingStar";
import styles from "./index.module.css";

export const Comparison = ({ isOpen, onClose }) => {

    const carsToCompare = useSelector(state => getCarsToCompare(state));

    if (!isOpen) {
        return null;
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

    const getBestCar = (cars, key, comparator) => {

        return cars.reduce((bestCar, currentCar) => {
            return comparator(currentCar[key], bestCar[key]) ? currentCar : bestCar;
        }, cars[0]);
    }

    const bestVolumeCar = getBestCar(carsToCompare, "engine", (a, b) => a > b);
    const bestYearCar = getBestCar(carsToCompare, "year", (a, b) => a > b);
    const bestPriceCar = getBestCar(carsToCompare, "price", (a, b) => a < b);

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
                            {car.id === bestVolumeCar.id && <RatingStar />}
                            {car.id === bestYearCar.id && <RatingStar />}
                            {car.id === bestPriceCar.id && <RatingStar />}
                            <div className={styles.carImg}>
                                <img src={car.picture} alt="" />
                            </div>
                            <div className={styles.carInfo}>
                                <h2>{car.brand} {car.model}</h2>
                                <p>Модель <strong>{car.year} года</strong> выпуска.</p>
                                <p><strong>Тип кузова:</strong> {car.bodyType}.</p>
                                <p><strong>Коробка переключения передач:</strong> {car.gearBox}.</p>
                                <p><strong>Объём двигателя:</strong> {car.engine} л.</p>
                                <p><strong>Параметры:</strong> {car.description}.</p>
                                <h3>Средняя цена: {car.price} $</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}