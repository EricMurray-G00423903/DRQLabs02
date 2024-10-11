// Imports
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';


// MovieItem component takes Props
function MovieItem(props) {
    // useEffect to update after page is rendered
    useEffect(() => {
    console.log("Movie Item:", props.mymovie); // Log each movie
    }, [props.mymovie]); // Only run this effect when the mymovie prop changes

    // Return data formatted using React Bootstrap card
    // Access data with props.propVariableName.Key
    return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <Card.Body>
                <Card.Title>{props.mymovie.Title}</Card.Title>
                <Card.Text>{props.mymovie.Year}</Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
}

// Export
export default MovieItem;