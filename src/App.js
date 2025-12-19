import './style/index.css';
import NavBar from './components/NavBar.js';
import Search from './components/Search.js';
import NumResults from './components/NumResults.js';
import Main from './components/Main.js';
import Box from './components/Box.js';
import MovieList from './components/MovieList.js';
import Pagination from './components/Pagination.js';
import MovieDetail from './components/MovieDetail.js';
import { useEffect, useState } from 'react';
import useMovieDataContext from './context/MovieContext.js';
import WatchedSummary from './components/WatchedSummary.js';
import WatchedMovies from './components/WatchedMovies.js';


function App() {
  const [ selectedId, setSelectedId ] = useState(null)
  const [ selectedMovie, setSelectedMovie ] = useState({})
  const [ searchValue, setSearchValue ] = useState('')
  const [ results, setResults ] = useState(0)
  
    const [ watched, setWatched ] = useState(function () {
      const stored = localStorage.getItem('watched')
      return  stored ? JSON.parse(stored) : []
    })

  
  function handleClose(){
    setSelectedId(null)

  }

  function handleAddWatchList(movie){
    setWatched((watched) => ([...watched,movie]))
  }

  function deleteWatchedMovie(id){

    setWatched((watched) => watched.filter((movie) => movie.id !== id))

  }

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(watched))
    
  },
  [watched])


  return (
  <>
    <NavBar>
      <Search setSearchValue={setSearchValue} />
      <NumResults results={results} />
    </NavBar>
    <Main>
      <Box>
        <MovieList 
        setSelectedId={setSelectedId}
        setSelectedMovie={setSelectedMovie} 
        searchValue={searchValue} 
        setResults={setResults}/>
      
      </Box>
      <Box>
        {selectedId ?  <MovieDetail selectedId={selectedId} selectedMovie={selectedMovie} onCloseMovie={handleClose} onHandleAddWatchingList={handleAddWatchList} watched={watched} /> 
        : <><WatchedSummary watched={watched} />
        <WatchedMovies watched={watched} onDeleteWatched={deleteWatchedMovie} /> </>}

      </Box>

    </Main>
    <Pagination />
  </>
  )
}

export default App;
