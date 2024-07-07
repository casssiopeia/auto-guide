import React from "react";
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
    const dbRef = ref(getDatabase(), "cars");
    onValue(dbRef, (snapshot) => {
      setCars(Object.values(snapshot.val()));
    });
  }, []);

  const carClicked = (car) => {
    setSelectedCar(car);
    setShowDetails(true);
  };

  const onDetailsClose = () => setShowDetails(false);

  return (
    <div className={styles.wrapper}>
      {showDetails && (
        <Details
          {...selectedCar}
          isOpen={showDetails}
          onClose={onDetailsClose}
        />
      )}
      <div className={`${styles.catalog}`}>
        {cars.map((car) => (
          <AutoCard key={car.id} {...car} onCardClick={carClicked} />
        ))}
      </div>
    </div>
  );
};
