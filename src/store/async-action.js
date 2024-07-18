import { createAsyncThunk } from "@reduxjs/toolkit";
import db from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const getCars = createAsyncThunk('getCars', async (payload, thunkApi) => {
    const querySnapshot = await getDocs(collection(db, "cars"));
    const cars = querySnapshot.docs.map((doc) => doc.data());

    return thunkApi.fulfillWithValue(cars);
});

