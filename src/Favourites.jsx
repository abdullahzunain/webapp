import React from "react";

const Favourites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-center">Your Favourites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No favourites added yet.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.id} className="p-4 border rounded shadow mt-4 text-center">
            <h3 className="text-lg font-bold">{movie.title}</h3>
            <p>{movie.year}</p>
            <button
              onClick={() => removeFromFavorites(movie.id)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-2"
            >
              💔 Remove from Favourite
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favourites;
