import React, { useEffect, useState } from 'react';
import './TitleCards.css';
import cards_data from '../../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

export const TitleCards = ({ title, category }) => {

  const [apiData,setApiData] =useState([]);
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWEzMWZmM2NkZTEzODE5NWI2NDM3NTM4MDgxNTExNyIsIm5iZiI6MTc2MzAwMzMzOC42NjQsInN1YiI6IjY5MTU0YmNhMjk1ZjMzZWI5NWFjMjI0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-9yVvHISlKiZEz-eaLN1SnUYLZ_FVjDlB9WH8oOhmU8'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
},[])

  return (
    <div className="title-Cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
         return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
          })}
      </div>
    </div>
  );
};
