import React from "react";

export const AutoCard = ({ brand, model, year, price, id }) => {

    return (
        <>
            <div>
                <h2>{brand} {model}</h2>
                <p>{year} Год</p>
                <p>{price} $</p>
            </div>
        </>
    )
}