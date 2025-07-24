const Favourites = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Favourites</h1>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favourites yet.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.id} className="p-4 border rounded shadow mb-4 text-center">
            <h2 className="text-lg font-bold">{movie.title}</h2>
            <p className="text-gray-600">{movie.year}</p>
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
