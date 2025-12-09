import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/axios";

const MovieDataContext = createContext()

export const MovieDataProvider = ({ children }) => {

    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState('')
    const [ moviesData, setMoviesData ] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const apiKey = 'd177b1faa31eb756e208e96f34fbeb53'
    const [ allMovies, setAllMovies ] = useState([])

    const [genres, setGenres] = useState(() => {
        const stored = localStorage.getItem("genres")
        return stored ? JSON.parse(stored) : null
      })

    const getMovies = async (page) => {//oldalanként

        try{
            setLoading(true)
            setError('')

                const response = await myAxios.get('/discover/movie', 
                {
                        params: {
                        api_key: apiKey,
                        with_original_language: 'ko',
                        include_adult: false,
                        certification_country: 'US',
                        'certification.lte': 'PG-13',
                        page
                        }
                }
                )
            
                const movies = response.data.results.map(movie => {
                    return {
                        ...movie,
                        poster_path: movie.poster_path ?
                        'https://image.tmdb.org/t/p/w500' + movie.poster_path :
                        null
                    }
                   
                })
            
            setMoviesData(movies)
            
            setAllMovies(prev => {
                const map = new Map()
              
                prev.forEach(m => map.set(m.id, m))//old movies
              
                movies.forEach(m => map.set(m.id, m))//new ones
              
                return Array.from(map.values())

              })

            setTotalPages(response.data.total_pages)
            setCurrentPage(page)
            setError('')

        }catch(error){
            console.log(error)
        }finally {
            setLoading(false)
        }

    }

      useEffect(() => {
        async function getAllGenres(){
    
            if(!genres){
                const resp = await myAxios.get(`/genre/movie/list?api_key=${apiKey}&language=en`)
                setGenres(resp.data.genres)
                localStorage.setItem("genres", JSON.stringify(resp.data.genres))
    
            }
    
        }
    
        getAllGenres()

      })


   useEffect(() => {

    getMovies(currentPage)
 
   },[currentPage])

    return (
        <MovieDataContext.Provider value={{ getMovies, moviesData, totalPages, currentPage, setCurrentPage,  loading, setLoading,error, setError,allMovies  }}>
        {children}
        </MovieDataContext.Provider>
    )
}

export default function useMovieDataContext() {
    return useContext(MovieDataContext)
}