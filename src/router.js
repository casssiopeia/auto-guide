import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./views/main";
import { FavoritesPage } from "./views/favorites";
import { ComparisonPage } from "./views/comparison";
import { NotFound } from "./views/not-found";
import { DetailsPage } from "./views/details";
import { SearchPage } from "./views/search";
import {Catalog} from './components/catalog';

export const Router = () => {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route index element={<Catalog/>}/>
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/details/:model" element={<DetailsPage />} />
        <Route path="/search/:brand" element={<SearchPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
