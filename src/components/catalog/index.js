import React from "react";
import { useState, useEffect } from "react";
import { AutoCard } from "../auto-card";

export const Catalog = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('../db.json')
        .then((response) => response.json())
        .then((data) => setCars(data));
    }, []);

    return (
        <>
            <div>
            
                {cars.map(car => {<AutoCard key={car.id} {...car} />})}
            </div>
        </>
    );
}