import WatchedMovie from "./WatchedMovie"

function WatchedMovies({ watched,onDeleteWatched }) {
    return (
        <ul className="list">
            {watched.map((movie) => (
                <WatchedMovie key={movie.id} movie={movie} onDeleteWatched={onDeleteWatched} />

            ))}
            
        </ul>
    )
}

export default WatchedMovies
