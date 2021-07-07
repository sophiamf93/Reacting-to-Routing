// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// //rafce
// const FilmDetails = () => {
//   const { id } = useParams();
//   const [film, setFilm] = useState(null);
//   useEffect(() => {
//     fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
//       .then((res) => res.json())
//       .then((film) => setFilm(film));
//   }, []);
//   return (
//     <div>
//       <h2>{film.title}</h2>
//     </div>
//   );
// };

// export default FilmDetails;
