import React from "react";
import { useSelector } from "react-redux";

import "../styles/movies.css";
import { useNavigate } from "react-router-dom";
import Moviecard from "./Moviecard";

function Movieslist() {
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.moviesapp);

  const sortedArray = [...movies];
  sortedArray.sort((a, b) => b.rating - a.rating);

  const handlepage = () => {
    navigate("/favorites");
  };

  return (
    <div className="main">
      <h1>Movieslist</h1>
      <button onClick={handlepage}>Favorites</button>
      <div className="container">
        {sortedArray.map((item) => (
          <Moviecard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Movieslist;
