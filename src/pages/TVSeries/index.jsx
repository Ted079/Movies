import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import SelectGenre from "../../components/SelectGenre";
import NotFound from "../404";
import { Container } from "../Home/style";
import Footer from "../../components/Footer";

const TVSeries = () => {
  const genresLoaded = useSelector((state) => state.flixster.genresLoaded);
  const movies = useSelector((state) => state.flixster.movies);
  const genres = useSelector((state) => state.flixster.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "tv" }));
  }, [genresLoaded]);

  return (
    <Container>
      <Navbar />
      <div>
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotFound />}
      </div>
      <br />
      <hr />
      <Footer/>
    </Container>
  );
};

export default TVSeries;
