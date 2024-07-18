import React from "react";
import { useState } from "react";
import { AutoCard } from "../auto-card";
import { Details } from "../details";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../../store/selectors";

export const Catalog = () => {

    // const [selectedCar, setSelectedCar] = useState(null);
    // const [showDetails, setShowDetails] = useState(false);

    const cars = useSelector(getCarsFromState);

    const navigate = useNavigate();

    const carClicked = (car) => {
        // setSelectedCar(car);
        // setShowDetails(true);
        navigate(`/details/${car.model}`);
    }

    // const onDetailsClose = () => setShowDetails(false);

    // return (
    //     <div className={styles.wrapper}>
    //         { showDetails && (
    //             <Details 
    //                 {...selectedCar} 
    //                 isOpen={showDetails} 
    //                 onClose={onDetailsClose} 
    //             /> 
    //         )}
    //         <div className={styles.catalog}>
    //             {cars.map((car) => ( 
    //                 <AutoCard key={car.id} {...car} onCardClick={carClicked} /> 
    //             ))}
    //         </div>
    //     </div>
    // );

    return (
        <div className={styles.wrapper}>
            <div className={styles.catalog}>
                {cars.map((car) => ( 
                    <AutoCard key={car.id} {...car} onCardClick={carClicked} /> 
                ))}
            </div>
        </div>
    );
}

// import { getDatabase, ref, onValue } from "firebase/database";

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