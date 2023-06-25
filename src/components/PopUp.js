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
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'

export default function PopUp() {
const userName = useParams();
  const films = Films.find(obj => {
    return obj.id == userName.id;
  });
//    let cost = films.cost.toLocaleString();
   return(
    <div className='container'>
     <div className='product-card'>
    	<div className='badge'>{films.name}</div>
    	<div className='product-tumb'>
    		<img src={`../${films.image}`} alt=''/>
    	</div>
    	<div className='product-details'>
        	<h4>{films.Title}</h4>
      		{/* <div className='product-price'>Market value: € {cost}</div> */}
      		<p>{films.Info}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>
   )
   }