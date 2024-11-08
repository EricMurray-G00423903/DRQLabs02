// Imports
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies";

// Raed component - Holds JSON data about movies
const Read = () => {

      // movies is the variable we can use || setMovies is the function to update the variable || useState(initialised value)
      const [movies, setMovies] = useState([], );

      // useEffect constantly running, page will load regardless
      useEffect(
        () => {
          //axios get call to api page
          axios.get('http://localhost:4000/api/movies')
          //.then to handle successful response
          .then((response) => {
            console.log(response.data); // log to console
            setMovies(response.data.movies);  // setMovies func from useState passes in the data from the response from api
          })
          //.catch if the api call falls do some function
          .catch((error) => {
            console.log(error);
          })
        }, []
      )

    // Pass data from the useState and api call to the movies component
    return (
      <div>
        <Movies myMovies={movies} />
      </div>
    )
}

// Export
export default Read;