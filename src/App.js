import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movieslist from "./Components/Movieslist";
import Favoritelist from "./Components/Favoritelist";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "./redux/movie.slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(process.env.REACT_APP_URL);
        dispatch(setMovies(response.data));
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    }
    fetchMovies();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movieslist />} />
        <Route path="/favorites" element={<Favoritelist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
