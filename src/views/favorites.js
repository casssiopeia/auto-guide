import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/header";
import { getBookmarks } from "../store/selectors";
import { AutoCard } from "../components/auto-card";

export const FavoritesPage = () => {

    const bookmarks = useSelector(getBookmarks);
    const favoritesExist = Boolean(bookmarks.length);
    
    const carClicked = (car) => {
        // setSelectedCar(car);
        // setShowDetails(true);
        navigate(`/details/${car.model}`);
    }

    return(
        <>
            <Header />
            { favoritesExist ? (
                bookmarks.map(car => (
                    <AutoCard key={car.id} {...car} onClick={carClicked} />
                ))
            ) : (
                <p>No favorites yet.</p>
            )}
        </>
    );
}