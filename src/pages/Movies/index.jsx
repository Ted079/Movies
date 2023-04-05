import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import { Box, styled } from "@mui/material";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import SelectGenre from "../../components/SelectGenre";
import NotFound from "../404";

const Container = styled(Box)({
  maxWidth: "1350px",
  margin: "0 auto",
  position: "relative",
  marginTop: "90px",
});

const Movies = () => {
  const navigate = useNavigate();

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

 

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });
  // console.log(movies);

  return (
    <Container>
      <Navbar/>
      <Box>
        <SelectGenre genres={genres} type="movie" />
        {movies.length ? <Slider movies={movies} /> : <NotFound />}
      </Box>
    </Container>
  );
};

export default Movies;
