import React, { useState, useMemo } from "react";
import { AutoCard } from "../auto-card";
import { Filters } from "../filters";
import { Basement } from "../basement";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

export const Catalog = () => {

    const cars = useSelector(getCarsFromState);

    const [filters, setFilters] = useState({
        priceOrder: "",
        selectedYear: "",
        selectedVolume: ""
    });

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
    }

    const filteredCars = useMemo(() => {

        let filtered = cars.filter(car => {

            return (
                (
                    filters.selectedYear === "" || 
                    filters.selectedYear === car.year.toString()
                ) &&
                (
                    filters.selectedVolume === "" ||
                    filters.selectedVolume === car.engine.toFixed(1)
                )
            );
        });

        if (filters.priceOrder === "asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (filters.priceOrder === "desc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    }, [cars, filters]);

    return (
        <>
            <div className={styles.wrapper}>
                <Filters onFilter={handleFilter} />
                <div className={styles.catalog}>
                    {filteredCars.map((car) => ( 
                        <AutoCard key={car.id} {...car} /> 
                    ))}
                </div>
            </div>
            <Basement />
        </>
    );
}