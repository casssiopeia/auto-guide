import React from "react";
import { useDispatch } from "react-redux";
import { addCarToCompare, removeCarFromCompare } from "../../store/comparedCarsSlice";
import styles from "./index.module.css";

export const Button = ({ car, isCarInCompare }) => {

    const dispatch = useDispatch();

    const handleAdd = () => {

        dispatch(addCarToCompare(car));
    }

    const handleRemove = () => {

        dispatch(removeCarFromCompare(car.id));
    }

    return (
        <>
            {isCarInCompare ? (
                <button onClick={handleRemove} className={styles.removeButton} >Удалить</button>
            ) : (
                <button onClick={handleAdd} className={styles.addButton}>Сравнить</button>
            )}
        </>
    );
}