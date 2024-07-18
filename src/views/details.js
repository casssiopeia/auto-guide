import React from "react";
import { Header } from "../components/header";
import { Details } from "../components/details";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarsFromState } from "../store/selectors";

export const DetailsPage = () => {

    const { model } = useParams();
    
    const cars = useSelector(getCarsFromState);

    const car = cars.find((car) => car.model === model);
    console.log(car);

    return (
        <>
            <Header />
            {
                car ? (
                    <Details {...car} />
                ) : (
                    <div>CAR NOT FOUND</div>
                )
            }
        </>
    );
}