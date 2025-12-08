import { useEffect, useState } from "react"
import useMovieDataContext from "../context/MovieContext"
import Movie from "./Movie"

function MovieList({ setSelectedId,setSelectedMovie, searchValue, setResults }){
    const { moviesData, allMovies } = useMovieDataContext()


        const filteringData = ()=>{
            if(searchValue && searchValue.length > 2){
                const filtered = allMovies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))
                setResults(filtered.length)
                return filtered
            }else{
                return moviesData
            }

        }
    
    return(
        <>
            {searchValue && searchValue.length < 3 && (
                    <div className="px-4 pl-4 pt-4 font-medium text-red-500 m-auto text-[1rem]">Search value has to contain at least 3 characters</div>
                )}
            <ul className="list">
                {filteringData().map((movie) => {
                    return <Movie setSelectedId={setSelectedId} setSelectedMovie={setSelectedMovie} movie={movie} key={movie.id}/>
                })}

            </ul>

        </>
    )
}

export default MovieList