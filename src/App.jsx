import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieApp from "./movieapp";
import Favourites from "./Favourites";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MovieApp
              favorites={favorites}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favourites
              favorites={favorites}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
