import { useState, useEffect } from "react";
const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const storedFavourites = localStorage.getItem("favorites");
  if (storedFavourites) {
    setFavorites(JSON.parse(storedFavourites));
  }
}, []);

useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

const addToFavorites = (movie) => {
  const alreadyFav = favorites.some((fav) => fav.id === movie.id);
  if (!alreadyFav) {
    setFavorites([...favorites, movie]);
  }
};

const removeFromFavorites = (id) => {
  setFavorites(favorites.filter((fav) => fav.id !== id));
};

const isFavorite = (id) => {
  return favorites.some((fav) => fav.id === id);
};
