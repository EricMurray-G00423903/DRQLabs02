// Imports
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

// Raed component - Holds JSON data about movies
const Read = () => {

      // movies
      const [movies, setMovies] = useState([], );

      useEffect(
        () => {
          axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
          .then((response) => {
            console.log(response.data);
            setMovies(response.data.movies);
          })
          .catch((error) => {
            console.log(error);
          })
        }, []
      )

    // Pass data array to the Movies Component with the variable name myMovies 
    return (
      <div>
        <Movies myMovies={movies} />
      </div>
    )
}

// Export
export default Read;