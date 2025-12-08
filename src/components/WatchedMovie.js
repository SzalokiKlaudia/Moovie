function WatchedMovie( {movie, onDeleteWatched }) {
    return (
        <li >
        <img src={movie.poster_path} alt={`${movie.title} poster`} />
        <h3>{movie.title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.popularity}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          
          <button className="btn-delete" onClick={() => onDeleteWatched(movie.id)}>✖️</button>
        </div>
      </li>
    )
}

export default WatchedMovie
