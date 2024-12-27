import React from "react";
import { Details } from "../components/details";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCarByModelAndYear } from "../store/selectors";

export const DetailsPage = () => {

    const { model, year } = useParams();
    
    const car = useSelector((state) => getCarByModelAndYear(state, model, parseInt(year)));

    return (
        <>
            { car ? (<Details {...car} />) : (<div>CAR NOT FOUND</div>) }
        </>
    );
}