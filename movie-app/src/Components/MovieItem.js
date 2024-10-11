import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

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

export default MovieItem;