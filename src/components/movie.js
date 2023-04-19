import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({CoverImg, title, summary, genres, id}) {
  return (
  <div>
    <img src={CoverImg} alt="" />
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <p>{summary}</p>
    <ul>
      {genres.map((g) => (<li key={g}>{g}</li>))}
    </ul>
</div>)
}

Movie.propTypes = {
  CoverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id : PropTypes.number.isRequired,
}

export default Movie;