import {configureStore} from "@reduxjs/toolkit";
import trendReducer from "../Features/trends/trendSlice";



export const store = configureStore({
    reducer: {
        trends: trendReducer
    }
})