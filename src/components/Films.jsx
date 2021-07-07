import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmCard from "./FilmCard";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => setFilms(res))
      .catch((err) => setFilms("it broke!"));

    return (
      <>
        {films.map((film) => (
          <FilmCard film={film} />
        ))}
      </>
    );
  });
  //useEffect that fetches all films, sets "films" state variable from the response
  return (
    <main className="container">
      <section className="row mt-3">
        {/* map through films array plug in film data (title, desc)
          wrap entire card returned from map inside of a Link to FilmDetails */}

        <div className="col-12">
          <h1 className="text-center">Film Page</h1>
        </div>
        {/* <Link to={`/${film.id}`}>
          <button>Show details</button>
        </Link> */}
      </section>
    </main>
  );
};

export default Films;