import "./ActiveResult.css";
import Header from "../Header/Header";
import { selectMovieById } from "../../redux/movieSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NoMovieFoundPage from "../NoMovieFoundPage/NoMovieFoundPage";

const ActiveResult = () => {
  const { id } = useParams();
  const activeFilm = useSelector((state) => selectMovieById(state, id));

  if (!activeFilm) {
    return <NoMovieFoundPage />;
  }

  return (
    <div className="activeResult--container">
      <Header showMagnifier={true} /*setActiveFilm={setActiveFilm} */ />
      <img src={activeFilm.posterPath} className="activeResult--img" alt="" />
      <div className="activeResult--title">
        <h1>{activeFilm.title}</h1>
        <h1 className="activeResult--rating">{activeFilm.voteAverage}</h1>
      </div>
      <div className="activeResult--genre">
        <h3>{activeFilm.genre}</h3>
      </div>

      <div className="activeResult--duration">
        <h2 className="activeResult--released">
          {activeFilm.releaseDate.slice(0, 4)}{" "}
        </h2>
        <h2 className="activeResult--runtime">{activeFilm.runtime} min</h2>
      </div>

      <div className="activeResult--description">{activeFilm.overview}</div>
    </div>
  );
};

export default ActiveResult;
