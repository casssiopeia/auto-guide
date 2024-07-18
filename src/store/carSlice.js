import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./async-action";

const initialState = {
    cars: [],
    error: null
};

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCars (state, action) {
            state.cars = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.cars = action.payload;
        });
        builder.addCase(getCars.rejected, (state, action) => {
            state.error = action.payload;
        })
    }
});

export const { setCars } = carSlice.actions;
export default carSlice.reducer;