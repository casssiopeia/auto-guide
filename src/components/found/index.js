import React from "react";
import styles from "./index.module.css";
import { useLocation } from "react-router-dom";
import { AutoCard } from "../auto-card";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

const useQuery = () => {
    
    return new URLSearchParams(useLocation().search);
}

export const Found = () => {

    const query = useQuery();

    const brand = query.get("brand");

    const cars = useSelector(getCarsFromState);

    const filteredCars = cars.filter(car => car.brand.toLowerCase () === brand.toLowerCase());

    return (
        <div className={styles.wrapper}>
            <div className={styles.foundElems}>
                {filteredCars.length > 0 ? (
                    (filteredCars.map(car => (<AutoCard {...car} />)))
                ) : (
                    <div className={styles.empty}>Совпадений не найдено</div>
                )}
            </div>
        </div>
    );
}