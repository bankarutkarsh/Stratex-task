import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movie.slice";


const store = configureStore({
    reducer: {
        moviesapp: MovieSlice.reducer,
    }
});

export default store;