import { useState } from "react";
import MovieItem from './movieItem';

const MovieList = () => {
  /* initial state count */
  const [count, setCount] = useState(0);

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

  const movies = [
    {
      image: "http://placehold.it/700x400",
      title: "Item One",
      price: 33.99,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
             numquam aspernatur!`,
    },
    {
      image: "http://placehold.it/700x400",
      title: "Item Two",
      price: 27.99,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
             numquam aspernatur!`,
    },
    {
      image: "http://placehold.it/700x400",
      title: "Item Three",
      price: 28.99,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
             numquam aspernatur!`,
    },
    {
      image: "http://placehold.it/700x400",
      title: "Item Four",
      price: 22.99,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
             numquam aspernatur!`,
    },
    {
      image: "http://placehold.it/700x400",
      title: "Item Five",
      price: 64.99,
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
             numquam aspernatur!`,
    },
  ];

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
