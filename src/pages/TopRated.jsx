import "../css/MovieCard.css"
import MovieCard from "../components/MovieCard"
import { useMovieContext } from "../contexts/MovieContext"
import { getTopRated } from "../services/api"
import { useState, useEffect } from "react"


function TopRated() {
        const [movies, setMovies] = useState([]);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const loadTopRated = async () => {
                try {
                    const topRated = await getTopRated()
                    setMovies(topRated)
                } catch (err) {
                    console.log(err)
                    setError("Failed to load movies...")
                }
                finally {
                    setLoading(false)
                }
            }
            loadTopRated()
        }, [])
    
        return (
            <div className="home">
        
                {error && <div className="error-message">{error}</div>}
        
                {loading ? (<div className="loading">Loading...</div>) : 
                (
                    <div className="movies-grid">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.id}/>
                        ))}
                    </div>
                )}
            </div>)
}

export default TopRated