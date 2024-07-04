import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { AutoCard } from "../auto-card";
import { Details } from "../details";
import app from "../../firebase/firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import styles from "./index.module.css";

export const Catalog = () => {

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const dbRef = ref(getDatabase(), 'cars');
        onValue(dbRef, (snapshot) => {
            const carsArr = [];
            snapshot.forEach((childSnapshot) => {
                carsArr.push(childSnapshot.val());
            });
            setCars(carsArr);
        });
    }, []);

    const carClicked = (car) => {
        setSelectedCar(car);
        setShowDetails(true);
    }

    const onDetailsClose = useCallback(() => setShowDetails(false), []);

    return (
        <>
            { showDetails && <Details {...selectedCar} isOpen={showDetails} onClose={onDetailsClose} /> }
            <div className={`${styles.catalog}`}>
                {cars.map((car, key) => ( <AutoCard key={key} {...car} onCardClick={carClicked} /> ))}
            </div>
        </>
    );
}

// TODO: Добавить затемнение фона