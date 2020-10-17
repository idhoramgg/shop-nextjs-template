const MovieItem = ({ movies }) => {
  /* 
  movies props: { image, title, price, desc }
  */
  return movies.map((movie) => {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#">
            <img className="card-img-top" src={movie.image} alt="" />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{movie.title}</a>
            </h4>
            <h5>${movie.price}</h5>
            <p className="card-text">{movie.desc}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              &#9733; &#9733; &#9733; &#9733; &#9734;
            </small>
          </div>
        </div>
      </div>
    );
  });
};
export default MovieItem;
