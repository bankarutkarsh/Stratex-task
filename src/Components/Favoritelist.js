import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Moviecard from "./Moviecard";

function Favoritelist() {
  const navigate = useNavigate();
  const { favorites } = useSelector((state) => state.moviesapp);

  const handlepage = () => {
    navigate("/");
  };

  return (
    <div className="main">
      <h1>Favoritelist</h1>
      <button onClick={handlepage}>Movieslist</button>
      <div className="container">
        {favorites.map((item) => (
          <Moviecard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Favoritelist;
