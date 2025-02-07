const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async() => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async(query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

export const getTopRated = async() => {
    const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`);
    const data = await response.json();
    return data.results;
}