import MovieItem from "./MovieItem";

const Movies = (props) => {
    return props.myMovies.map((movie) => (
        <MovieItem mymovie={movie} key={movie.imdbID} />
      ));
}

export default Movies;