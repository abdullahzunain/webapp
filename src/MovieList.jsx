{movies.map((movie) => (
  <div key={movie.id} className="movie-card">
    <img src={movie.poster} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>{movie.year}</p>
  {isFavorite(movie.id) ? (
  <button
    onClick={() => removeFromFavorites(movie.id)}
    className="bg-red-500 text-white px-3 py-1 rounded mt-2"
  >
    💔 Remove from Favourite
  </button>
) : (
  <button
    onClick={() => addToFavorites(movie)}
    className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
  >
    ❤️ Add to Favourite
  </button>
)}

  </div>
))}
