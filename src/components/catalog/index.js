import React from "react";
import { useState, useEffect } from "react";
import { AutoCard } from "../auto-card";
import { Details } from "../details";
import app from "../../firebase/firebase-config";
// import { getDatabase, ref, onValue } from "firebase/database";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

export const Catalog = () => {

    const [selectedCar, setSelectedCar] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    // useEffect(() => {
    //     const dbRef = ref(getDatabase(), 'cars');
    //     onValue(dbRef, (snapshot) => {
    //         const carsArr = [];
    //         snapshot.forEach((childSnapshot) => {
    //             carsArr.push(childSnapshot.val());
    //         });
    //         setCars(carsArr);
    //     });
    // }, []);

    const cars = useSelector(getCarsFromState);

    const carClicked = (car) => {
        setSelectedCar(car);
        setShowDetails(true);
    }

    const onDetailsClose = () => setShowDetails(false);

    return (
        <div className={styles.wrapper}>
            { showDetails && (
                <Details 
                    {...selectedCar} 
                    isOpen={showDetails} 
                    onClose={onDetailsClose} 
                /> 
            )}
            <div className={styles.catalog}>
                {cars.map((car) => ( 
                    <AutoCard key={car.id} {...car} onCardClick={carClicked} /> 
                ))}
            </div>
        </div>
    );
}