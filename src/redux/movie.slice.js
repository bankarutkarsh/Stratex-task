import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState: {
    movies: [],
    favorites: [],
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setFavorites(state, action) {
      if (!state.favorites.some((movie) => movie.id === action.payload.id)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export default MovieSlice;

export const { setMovies, setFavorites, removeFavorite } = MovieSlice.actions;
