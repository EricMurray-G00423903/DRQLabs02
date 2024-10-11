// Imports
import MovieItem from "./MovieItem";

// Movie component takes props
const Movies = (props) => {

    // Map function over every element
    // Maps over myMovies(from read parent)
    // Passes myMovie variable to MovieItem component

    return props.myMovies.map((movie) => (
        <MovieItem mymovie={movie} key={movie.imdbID} />
      ));


}

// Export
export default Movies;