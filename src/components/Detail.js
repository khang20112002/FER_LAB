// import React, { Component } from "react";
// import { Films } from "../shared/ListOfFilms";
// import "./Films.css";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function PopUp() {
// //   const closePopup = () => {};

//   return (
//     <>
//       Film
//     </>
//   );
// }//

import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import { Films } from "../shared/ListOfFilms";
import './Detail.css';

export default function Detail() {
	  const userName = useParams();
  const films = Films.find((obj) => {
    return obj.id == userName.id;
  });
  //    let cost = films.cost.toLocaleString();
  return (
    <div className="container">
      <div className="film-card">
        <div className="badge">{films.name}</div>
        <div className="film-tumb">
          <img src={`../${films.image}`} alt="" />
        </div>
        <div className="film-details">
          <h4>{films.Title}</h4>
          <p>{films.Info}</p>
          <div className="film-bottom-details"></div>

		<Link className="close" to={`/`}><p>Back</p></Link>
        </div>
      </div>
    </div>
  );
}
