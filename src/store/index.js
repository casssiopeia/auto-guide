import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import bookmarkReducer from "./bookmarkSlice";
import comparedCarsReducer from "./comparedCarsSlice";

export const store = configureStore({
    reducer: {
        cars: carReducer,
        bookmarks: bookmarkReducer,
        comparedCars: comparedCarsReducer,
    },
});