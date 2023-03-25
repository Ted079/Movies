import Card from "../../components/MovieCard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import {Box, styled} from "@mui/material";
 

const Container = styled(Box)({
  maxWidth: "1350px",
  margin: "0 auto",
  position: "relative",
  marginTop:"90px",
})

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const genresLoaded = useSelector((state) => state.flixster.genresLoaded);
  const movies = useSelector((state) => state.flixster.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  });

  window.onscroll = () => {
    setIsScrolled(window.pageXOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies);

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />

      <Slider movies={movies} />
    </Container>
  );
};





export default Home;
