function Movie( {movie,setSelectedId,setSelectedMovie } ){
   
    function onSelectMovie(id) {
    
        setSelectedId((prev) => (id === prev ? null : id))
        setSelectedMovie(movie)  
        
    }
 

    function formattedSt(){
        let date = movie.release_date
        return date = date.replaceAll('-','.') + '.'
    }

    return(
        <li onClick={() => onSelectMovie(movie.id)}>
            <img src={movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <div>
                <span>{formattedSt()}</span>
            </div>

        </li>
    )
}

export default Movie