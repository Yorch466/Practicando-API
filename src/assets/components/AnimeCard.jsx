import React, { useEffect, useState } from "react";
import "./AnimeCard.css";

export const AnimeCard = () => {
  const api = "https://kitsu.io/api/edge/trending/anime";

  const [series, setSeries] = useState([]);

  useEffect(() => {
    getSeries();
  }, []);

  function getSeries() {
    fetch(api)
      .then((res) => res.json())
      .then((response) => {
        const { data = [] } = response;
        setSeries(data);
      });
  }
  return (
    <div className="card-container" >
      {series.map((serie) => {
        return(
        <div className="cardImage" key={serie.id}>
          <h1 className="titulo">{serie.attributes.titles.en}</h1>
          <img src={serie.attributes.posterImage.small } alt="no furulo we" />
        </div>)
      })}
    </div>
  );
};
