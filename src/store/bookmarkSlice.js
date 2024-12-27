import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const bookmarkSlice = createSlice({
    name: "bookmarkSlice",
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            state.items.push(action.payload);
        },
        removeBookmark: (state, action) => {
            state.items = state.items.filter(car => car.id !== action.payload);
        },
    }
});

export const { addBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;