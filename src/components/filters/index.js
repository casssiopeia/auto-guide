import React, { useState, useEffect, useCallback } from "react";
import styles from "./index.module.css";

export const Filters = ({ cars, onFilter }) => {

    const [priceOrder, setPriceOrder] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedVolume, setSelectedVolume] = useState("");

    const [years, setYears] = useState([]);
    const [volumes, setVolumes] = useState([]);

    useEffect(() => {

        const uniqueYears = [...new Set(cars.map(car => car.year))].sort((a, b) => a - b);
        const uniqueVolumes = [...new Set(cars.map(car => car.engine))].sort((a, b) => a - b);
        
        setYears(uniqueYears);
        setVolumes(uniqueVolumes);
    }, [cars]);

    const filterCars = useCallback(() => {

        let filtered = cars.filter(car => {

            return (
                (
                    selectedYear === "" || 
                    selectedYear === car.year.toString()
                ) &&
                (
                    selectedVolume === "" ||
                    selectedVolume === car.engine.toString()
                )
            );
        });

        if (priceOrder === "asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (priceOrder === "desc") {
            filtered.sort((a, b) => b.price - a.price);
        }

        onFilter(filtered);
    }, [cars, priceOrder, selectedYear, selectedVolume, onFilter]);

    useEffect(() => {
        filterCars();
    }, [filterCars]);

    const handlePriceChange = (event) => {
        setPriceOrder(event.target.value);
    }

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    }

    const handleVolumeChange = (event) => {
        setSelectedVolume(event.target.value);
    }

    return (
        <div className={styles.filterFieldWrapper}>
            <div className={styles.fieldName}>Фильтры</div>
            <div className={styles.filterField}>
                <div className={styles.indicator}>
                    <label htmlFor="price">Цена</label>
                    <select
                        id="price"
                        onChange={handlePriceChange}
                    >
                        <option value=""></option>
                        <option value={"asc"}>По возрастанию</option>
                        <option value={"desc"}>По убыванию</option>
                    </select>
                </div>
                <div className={styles.indicator}>
                    <label htmlFor="year">Год</label>
                    <select
                        id="year"
                        onChange={handleYearChange}
                    >
                        <option value=""></option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.indicator}>
                    <label htmlFor="engine">Объём двигателя</label>
                    <select
                        id="engine"
                        onChange={handleVolumeChange}
                    >
                        <option value=""></option>
                        {volumes.map(volume => (
                            <option key={volume} value={volume}>{volume.toFixed(1)}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}
