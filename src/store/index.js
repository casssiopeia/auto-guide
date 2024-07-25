import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
    reducer: {
        cars: carReducer,
        bookmarks: bookmarkReducer
    },
});