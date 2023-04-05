import Card from "../../components/MovieCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import { Box, styled } from "@mui/material";

const Container = styled(Box)({
  maxWidth: "1350px",
  margin: "90px 70px",
  position: "relative",
});

const Home = () => {
  const genresLoaded = useSelector((state) => state.flixster.genresLoaded);
  const movies = useSelector((state) => state.flixster.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, [genresLoaded]);

  // console.log(movies);

  return (
    <Container>
      <Navbar />

      <Slider movies={movies} />
    </Container>
  );
};

export default Home;
