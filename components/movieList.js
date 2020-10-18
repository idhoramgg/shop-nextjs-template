import { useState, useEffect } from "react";
import MovieItem from './movieItem';
import { getMovie } from '../actions';

const MovieList = () => {
  /* initial state count */
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([])
  /* handling count */
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  /* end handling count */

  useEffect(() => {
    setMovies(getMovie())
  })

  return (
    <>
      {/* Button Section */}
      {/* <div>
        <button onClick={handleIncrement} className="btn btn-primary">
          {" "}
          Increment Number
        </button>
        <button onClick={handleDecrement} className="btn btn-primary">
          {" "}
          Decrement Number
        </button>
        <h1>{count}</h1>
      </div> */}
      {/* End Button Section */}

      {/* Movie List, should be pass as Props and set to different component later */}
      <>
      <MovieItem movies={movies}/>
      </>
   
     
    </>
  );
};
export default MovieList;
