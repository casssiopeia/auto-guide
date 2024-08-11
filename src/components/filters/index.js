import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";
import { FilterAlt } from "@mui/icons-material";
import styles from "./index.module.css";

export const Filters = ({ onFilter }) => {

    const cars = useSelector(getCarsFromState);

    const [priceOrder, setPriceOrder] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedVolume, setSelectedVolume] = useState("");

    const [years, setYears] = useState([]);
    const [volumes, setVolumes] = useState([]);

    // const years = [];

    // for (let year = 2000; year <= 2024; year++) {

    //     years.push(year);
    // }

    // const volumes = [];

    // for (let volume = 1.6; volume <= 7.0; volume += 0.1) {

    //     volumes.push(volume.toFixed(1));
    // }

    useEffect(() => {

        const uniqueYears = [...new Set(cars.map(car => car.year))].sort((a, b) => a - b);
        const uniqueVolumes = [...new Set(cars.map(car => car.engine))].sort((a, b) => a - b);
        
        setYears(uniqueYears);
        setVolumes(uniqueVolumes);
    }, [cars]);

    const handlePriceChange = (event) => {
        setPriceOrder(event.target.value);
    }

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    }

    const handleVolumeChange = (event) => {
        setSelectedVolume(event.target.value);
    }

    const handleFilterClick = () => {
        onFilter({ priceOrder, selectedYear, selectedVolume });
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
                            <option key={volume} value={volume}>{volume}</option>
                        ))}
                    </select>
                </div>
                <FilterAlt className={styles.filterButton} onClick={handleFilterClick} style={{ fontSize: 45 }} />
            </div>
        </div>
    );
}