import React from "react";
import { AutoCard } from "../auto-card";
import { Warning } from "../warning";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

export const Catalog = () => {

    const cars = useSelector(getCarsFromState);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.catalog}>
                    {cars.map((car) => ( 
                        <AutoCard key={car.id} {...car} /> 
                    ))}
                </div>
            </div>
            <Warning />
        </>
    );
}