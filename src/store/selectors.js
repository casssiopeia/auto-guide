import {createSelector} from '@reduxjs/toolkit'; 

export const getCarsFromState = (state) => {
    return state.cars.cars;
};

export const getCarByModel = (state, model) => {
    return state.cars.cars.find((car) => car.model === model);
};

export const getBookmarks = (state) => {
    return state.bookmarks.items;
}

export const isBookmarked = (state, id) => {
    return state.bookmarks.items.some(car => car.id === id);
}