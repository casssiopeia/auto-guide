import React, { useState, useCallback } from "react";
import { AutoCard } from "../auto-card";
import { Filters } from "../filters";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

export const Catalog = () => {

    const cars = useSelector(getCarsFromState);

    const [filteredCars, setFilteredCars] = useState(cars);

    const handleFilter = useCallback((filtered) => {
        setFilteredCars(filtered);
    }, []);

    return (
        <div className={styles.wrapper}>
            <Filters cars={cars} onFilter={handleFilter} />
            <div className={styles.catalog}>
                {filteredCars.map((car) => ( 
                    <AutoCard key={car.id} {...car} /> 
                ))}
            </div>
        </div>
    );
}