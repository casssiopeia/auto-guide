import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./views/main";
import { Catalog } from "./components/catalog";
import { Favorites } from "./components/favorites";
import { NotFoundPage } from "./views/not-found";
import { DetailsPage } from "./views/details";
import { SearchPage } from "./views/search";

export const Router = () => {

    return (
        <Routes>
            <Route element={<Main />}>
                <Route index element={<Catalog />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/details/:model/:year" element={<DetailsPage />} />
                <Route path="/search" element={<SearchPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}