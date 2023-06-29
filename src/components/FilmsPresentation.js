import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import "./Films.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";

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

              <Link to={`film/${film.id}`}><p>Detail</p></Link>

                {/* <a href="#popup1" id="openPopUp" style={{ color: "white" }}>
                  Detail
                </a> */}

            </div>
          </div>
        </div>
      ))}
      
        
    </div>
    </>
  );
}
