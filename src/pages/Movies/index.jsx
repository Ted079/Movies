import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import { Box } from "@mui/material";
import SelectGenre from "../../components/SelectGenre";
import NotFound from "../404";
import { Container } from "../Home/style";

const Movies = () => {
  const genresLoaded = useSelector((state) => state.flixster.genresLoaded);
  const movies = useSelector((state) => state.flixster.movies);
  const genres = useSelector((state) => state.flixster.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "movie" }));
  }, [genresLoaded]);

  return (
    <Container>
      <Navbar />
      <Box>
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotFound />}
      </Box>
    </Container>
  );
};

export default Movies;
