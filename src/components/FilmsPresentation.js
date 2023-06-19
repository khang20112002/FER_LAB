import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import "./Films.css";

import { useState } from "react";

export default function FilmsPresentation(){
  const [film, setFilm] = useState({});

  const closePopup = () => {};

  return (
    <>
    <div className="container">
      {Films.map((film) => (
        <div className="column" key={film.id}>
          <div className="card">
            <img src={film.image} className="card-image" />
            <div className="card-body">
              <div className="title-body">
                <h1>{film.Title}</h1>
              </div>
              <p className="">{film.Year}</p>
              <p>{film.Nation}</p>

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
          <div className="popup">

            <img src={film.image}/>
            <h2>{film.Title}</h2>

            <a className="close" href="#" onClick={closePopup}>
              &times;
            </a>

            <div className="content">{film.Info}</div>
          </div>
        </div>
    </div>
    </>
  );
}
