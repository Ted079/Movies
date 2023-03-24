import React from "react";
import CardSlider from "../CardSlider";

export default function Slider({ movies }){
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };

  return (
    <div>
      <CardSlider title="Trending Now" data={getMoviesFromRange(0, 6)} />
      <CardSlider title="New Releases" data={getMoviesFromRange(6, 12)} />
      <CardSlider title="Blockbuster" data={getMoviesFromRange(18, 24)} />
      <CardSlider title="Popular" data={getMoviesFromRange(30, 40)} />
      <CardSlider title="Action" data={getMoviesFromRange(40, 50)} />
      <CardSlider title="Epics" data={getMoviesFromRange(50, 60)} />
    </div>
  );
};

// export default Slider;
