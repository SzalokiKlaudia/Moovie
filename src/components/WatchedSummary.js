import { useState } from "react"

function WatchedSummary({ watched }) {
    const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

    const avgRating = average(watched.map((movie)=> movie.popularity))
    const rounded = Number(avgRating.toFixed(2))
    const userRating = average(watched.map((movie) => movie.userRating))
    const roundedUserRate = Number(userRating.toFixed(2))
   
    return (
        <div className="summary">
        <h2>Movies you watched</h2>
        <div>
          <p>
            <span>{watched.length}</span>
            <span> movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{rounded}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{roundedUserRate}</span>
          </p>
        
        </div>
      </div>
    )
}

export default WatchedSummary
