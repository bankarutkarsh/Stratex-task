import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, setFavorites } from "../redux/movie.slice";

function Moviecard({ item }) {
  const dispatch = useDispatch();

  const { favorites } = useSelector((state) => state.moviesapp);

  const redirect = (url) => {
    window.open(url, "_blank");
  };

  const handleClick = (event, item) => {
    event.stopPropagation();
    if (favorites.includes(item)) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(setFavorites(item));
    }
  };

  return (
    <div
      key={item.id}
      className="movie-card"
      onClick={() => redirect(item.imdb_url)}
    >
      {favorites.includes(item) ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-star-fill"
          viewBox="0 0 16 16"
          onClick={(event) => handleClick(event, item)}
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-star"
          viewBox="0 0 16 16"
          onClick={(event) => handleClick(event, item)}
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
        </svg>
      )}

      <h3>{item.movie}</h3>
      <img src={item.image} alt={item.image.slice(7)} />
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
        {item.rating}/10
      </p>
    </div>
  );
}

export default Moviecard;
