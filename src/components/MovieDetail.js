import { useState } from "react";
import useMovieDataContext from "../context/MovieContext";
import StarRating from "./StarRating";


function MovieDetail({ selectedId,selectedMovie,onCloseMovie,onHandleAddWatchingList,watched  }) {
    const [ userRating, setUserRating ] = useState('')
    const findDuplicateData = watched.map((prev) => prev.id).includes(selectedId)

    function getGenreNames() {
        const stored = localStorage.getItem("genres")

        if(!stored){
            return []
        }

        const allGenres = JSON.parse(stored)

        const genreNames = allGenres.filter((genre) => selectedMovie.genre_ids.includes(genre.id)).map(genre => genre.name)

        return genreNames
        
    }

    console.log(userRating)

    function handleAdd(){
        const newWatchedMovie = {
            id: selectedMovie.id,
            poster_path: selectedMovie.poster_path,
            title: selectedMovie.title,
            release_date: selectedMovie.release_date,
            popularity: selectedMovie.popularity,
            userRating
        }

        onHandleAddWatchingList(newWatchedMovie)
        onCloseMovie()

    }

   
    return (
        <div className="details">
            {selectedId === selectedMovie.id ? 
            <>
                <header>
                <button className="btn-back" onClick={onCloseMovie}>🔙</button>
                <img src={selectedMovie.poster_path} alt={`Poster of ${selectedMovie.title} movie`} />
                <div className="details-overview">
                    <h2>{selectedMovie.title}</h2>
                    <p>{selectedMovie.release_date.replaceAll("-",".") + (".")}</p>
                    {getGenreNames().map((genre) => {
                        return <p key={genre}>{genre}</p>

                    })}
                    <p><span>⭐</span>{selectedMovie.vote_average} Rating</p>

                </div>
                </header>
                <section>
                <div className="rating">
                    {!findDuplicateData ? (
                        <>
                           <StarRating maxRating={10} size={24} onSetRating={setUserRating}/>
                           {userRating > 0 && ( <button className="btn-add" onClick={handleAdd} >Add</button>)}
                        </> 
                    )
                    : (<p>This movie has ben added to the list before!</p>)
                    }
             

                </div>
                <p><em>{selectedMovie.overview}</em></p>
                </section>
            
            </> : <p>Something went wrong...</p>
            }
            
        </div>
    )
}

export default MovieDetail
