import React from 'react';

export default function MovieDisplay({ movie }){
    // Function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1 className="movie-name">{movie.Title}</h1>
          <h2 className="movie-category">{movie.Genre}</h2>
         <div className='div-pic'> <img className ="movie-pic"src={movie.Poster} alt={movie.Title} /></div>
          <h2 className="movie-year">{movie.Year}</h2>
        </>
      );
    };
  
    // Function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    // Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  }