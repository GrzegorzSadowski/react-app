import "./ActiveResult.css";
import Header from "../Header/Header";

const ActiveResult = (props) => {
  const { setActiveFilm, activeFilm } = props;

  return (
    <div className="activeResult--container">
      <Header showMagnifier={true} setActiveFilm={setActiveFilm} />
      <img src={activeFilm.img} className="activeResult--img" alt="" />
      <div className="activeResult--title">
        <h1>{activeFilm.title}</h1>
        <h1 className="activeResult--rating">{activeFilm.rating}</h1>
      </div>
      <div className="activeResult--genre">
        <h3>{activeFilm.genre}</h3>
      </div>

      <div className="activeResult--duration">
        <h2 className="activeResult--released">{activeFilm.released} </h2>
        <h2 className="activeResult--runtime">{activeFilm.runtime} min</h2>
      </div>

      <div className="activeResult--description">{activeFilm.description}</div>
    </div>
  );
};

export default ActiveResult;
