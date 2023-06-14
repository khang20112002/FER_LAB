import React, { Component } from 'react';
import { Films } from '../shared/ListOfFilms';
import './Films.css';

export default function FilmsPresentation({Films}) {
        return (
            <div className='container'>
                {Films.map((Films) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={Films.image} className='card-image'/>
                            <div className='card-body'>
                                <div className="title-body">
                                    <h1>{Films.Title}</h1>
                                </div>
                                <p className=''>{Films.Year}</p>
                                <p>{Films.Nation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
