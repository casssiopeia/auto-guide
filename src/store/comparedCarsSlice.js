import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    showModal: false
};

const comparedCarsSlice = createSlice({
    name: "comparedCarsSlice",
    initialState,
    reducers: {
        addCarToCompare: (state, action) => {
            if (state.items.length < 3) {
                state.items.push(action.payload);
            } else {
                state.showModal = true;
            }
        },
        removeCarFromCompare: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCarsToCompare: (state) => {
            state.items = [];
        },
        closeModal: (state) => {
            state.showModal = false;
        },
    }
});

export const { addCarToCompare, removeCarFromCompare, closeModal, clearCarsToCompare } = comparedCarsSlice.actions;
export default comparedCarsSlice.reducer;