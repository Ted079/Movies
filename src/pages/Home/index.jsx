import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { fetchMovies, getGenres } from "../../store";
import Slider from "../../components/Slider";
import { Container } from "./style";
import Footer from "../../components/Footer";

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

  return (
    <Container>
      <Navbar />
      <Slider movies={movies} />
    </Container>
  );
};

export default Home;
