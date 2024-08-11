import React from "react";
import { useDispatch } from "react-redux";
import { addCarToCompare, removeCarFromCompare } from "../../store/comparedCarsSlice";
import { CompareArrows } from "@mui/icons-material";
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
                <CompareArrows onClick={handleRemove} style={{ fontSize: 45 }} className={styles.removeButton} />
            ) : (
                <CompareArrows onClick={handleAdd} style={{ fontSize: 45 }} className={styles.addButton} />
            )}
        </>
    );
}