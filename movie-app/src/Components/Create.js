// Imports
import { useState } from "react";
import axios from "axios";

// create function
function Create() {
    
    //useState to handle title, year, poster || initial values set to ''
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    //when the submit button is clicked log the title and year and poster to the console
    // create.js
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
        
        const movie = {
        title: title,
        year: year,
        poster: poster
        };
        
        axios.post('http://localhost:4000/api/movies', movie)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.data));
    };


    //on form submit go to handleSubmit() || use setTitle, year, poster funcs and values and pass event to the variables which will log to console
    return (
        <div>
        <h2>This is my Create Component.</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Add Movie Title: </label>
                    <input type="text"
                    name="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />

                <label>Add Movie Year: </label>
                    <input type="text"
                    name="year"
                    className="form-control"
                    value={year}
                    onChange={(e) => { setYear(e.target.value) }}
                />

                <label>Add Movie Poster: </label>
                    <input type="text"
                    name="poster"
                    className="form-control"
                    value={poster}
                    onChange={(e) => { setPoster(e.target.value) }}
                />
            </div>
            <input type="submit" value="Add Movie" />
        </form>
        </div>
    );
}

// Export
export default Create;