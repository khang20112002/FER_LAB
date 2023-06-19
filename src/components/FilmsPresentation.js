import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import "./Films.css";

import { useState } from "react";

export default function FilmsPresentation({ Films }) {
  const [film, setFilm] = useState({});

  const closePopup = () => {};

  return (
    <div className="container">
      {Films.map((Films) => (
        <div className="column">
          <div className="card">
            <img src={Films.image} className="card-image" />
            <div className="card-body">
              <div className="title-body">
                <h1>{Films.Title}</h1>
              </div>
              <p className="">{Films.Year}</p>
              <p>{Films.Nation}</p>

              <button onClick={() => setFilm(film)} className="btn">
                <a href="#popup1" id="openPopUp" style={{ color: "white" }}>
                  Detail
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}

      <div id="popup1" className="overlay">
        <div className="popup" >
          <img src={Films.image} alt={Films.Title}/> 
          
          <h2>{Films.Title}</h2>

          <a className="close" href="#" onClick={closePopup}>
            &times;
          </a>
          <div className="content">{Films.Info}</div>
        </div>
      </div>
    </div>
  );
}
