import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/header";
import { getBookmarks } from "../store/selectors";
import { AutoCard } from "../components/auto-card";

export const FavoritesPage = () => {

    const bookmarks = useSelector(getBookmarks);

    return(
        <>
            <Header />
            {bookmarks.length > 0 ? (
                bookmarks.map(car => (
                    <AutoCard key={car.id} {...car} />
                ))
            ) : (
                <p>No favorites yet.</p>
            )}
        </>
    );
}